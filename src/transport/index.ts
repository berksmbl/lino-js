import ByteBuffer from 'bytebuffer';
import { ec as EC } from 'elliptic';
import { decodePrivKey, encodeSignMsg, encodeTx } from './encoder';
import { ResultBlock, ResultBroadcastTxCommit, Rpc } from './rpc';

export interface ITransport {
  query<T = any>(key: string, storeName: string): Promise<T>;
  block(height: number): Promise<ResultBlock>;
  signBuildBroadcast(
    msg: any,
    msgType: string,
    privKeyHex: string,
    seq: number
  ): Promise<ResultBroadcastTxCommit>;
}

export interface ITransportOptions {
  nodeUrl: string;
  chainId?: string;
}

export class Transport implements ITransport {
  // This will be hard coded later
  private _chainId: string;
  private _rpc: Rpc;

  constructor(opt: ITransportOptions) {
    this._rpc = new Rpc(opt.nodeUrl); // create with nodeUrl
    this._chainId = opt.chainId || 'test-chain-i21cJ7';
  }

  query<T>(key: string, storeName: string): Promise<T> {
    // transport: get path and key for ABCIQuery and return result
    // get transport's node and do ABCIQuery
    // rpc client do rpc call
    // check resp
    const path = `/${storeName}/key`;
    return this._rpc.abciQuery(path, key).then(result => {
      if (!result.response || !result.response.value) {
        throw new Error('Query failed: Empty result');
      }

      const jsonStr = ByteBuffer.atob(result.response.value);
      return JSON.parse(jsonStr) as T;
    });
  }

  block(height: number): Promise<ResultBlock> {
    return this._rpc.block(height).then(result => {
      return result as ResultBlock;
    });
  }

  // Does the private key decoding from hex, sign message,
  // build transaction to broadcast
  signBuildBroadcast(
    msg: any,
    msgType: string,
    privKeyHex: string,
    seq: number
  ): Promise<ResultBroadcastTxCommit> {
    // private key from hex
    var ec = new EC('secp256k1');
    var key = ec.keyFromPrivate(decodePrivKey(privKeyHex), 'hex');
    // signmsg
    const signMsgHash = encodeSignMsg(msg, this._chainId, seq);
    // sign to get signature
    const sig = key.sign(signMsgHash, { canonical: true });
    const sigDERHex = sig.toDER('hex');
    // build tx
    const tx = encodeTx(msg, msgType, key.getPublic(true, 'hex'), sigDERHex, seq);

    // return broadcast
    return this._rpc.broadcastTxCommit(tx).then(result => {
      if (result.check_tx.code !== undefined) {
        throw new BroadcastError(
          BroadCastErrorEnum.CheckTx,
          result.check_tx.log,
          result.check_tx.code
        );
      } else if (result.deliver_tx.code !== undefined) {
        throw new BroadcastError(
          BroadCastErrorEnum.DeliverTx,
          result.deliver_tx.log,
          result.deliver_tx.code
        );
      }
      return result;
    });
  }
}

export enum BroadCastErrorEnum {
  CheckTx,
  DeliverTx
}

// How to extend Error in TS2.1+:
// https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
export class BroadcastError extends Error {
  readonly code: number;
  readonly type: BroadCastErrorEnum;

  constructor(type: BroadCastErrorEnum, log: string, code: number) {
    super(log);
    Object.setPrototypeOf(this, BroadcastError.prototype);
    this.type = type;
    this.code = code;
  }
}
