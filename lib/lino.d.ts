import Query from './query';
import Broadcast from './broadcast';
import { ITransportOptions } from './transport';
export declare class LINO {
    private _options;
    private _transport;
    private _query;
    private _broadcast;
    constructor(opt: ITransportOptions);
    readonly query: Query;
    readonly broadcast: Broadcast;
}
