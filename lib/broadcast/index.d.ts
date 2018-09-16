import * as Types from '../common';
import { ITransport } from '../transport';
import { ResultBroadcastTxCommit } from '../transport/rpc';
export default class Broadcast {
    private _transport;
    constructor(transport: ITransport);
    /**
     * Register registers a new user on blockchain.
     * It composes RegisterMsg and then broadcasts the transaction to blockchain.
     *
     * @param referrer: the user who refers the new user
     * @param register_fee: the amount of money used for registering
     * @param username: new username
     * @param resetPubKey: new user's reset key
     * @param transactionPubKeyHex: new user's transaction key
     * @param appPubKeyHex: new user's app key
     * @param referrerPrivKeyHex: referrer's private key
     * @param seq: the sequence number of referrer for the next transaction
     */
    register(referrer: string, register_fee: string, username: string, resetPubKey: string, transactionPubKeyHex: string, appPubKeyHex: string, referrerPrivKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * Transfer sends a certain amount of LINO token from the sender to the receiver.
     * It composes TransferMsg and then broadcasts the transaction to blockchain.
     *
     * @param sender: the user who wants to send money
     * @param receiver: the receiver whom the sender sends money to
     * @param amount: the amount LINO token in the transfer
     * @param memo: memos inthe transfer
     * @param privKeyHex: the private key of sender
     * @param seq: the sequence number of sender for the next transaction
     */
    transfer(sender: string, receiver: string, amount: string, memo: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * Follow creates a social relationship between follower and followee.
     * It composes FollowMsg and then broadcasts the transaction to blockchain.
     *
     * @param follower: follower
     * @param followee: followee
     * @param privKeyHex: the private key of follower
     * @param seq: the sequence number of follower for the next transaction
     */
    follow(follower: string, followee: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * Unfollow revokes the social relationship between follower and followee.
     * It composes UnfollowMsg and then broadcasts the transaction to blockchain.
     *
     * @param follower: follower
     * @param followee: followee
     * @param privKeyHex: the private key of follower
     * @param seq: the sequence number of follower for the next transaction
     */
    unfollow(follower: string, followee: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * Claim claims rewards of a certain user.
     * It composes ClaimMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who wants to claim reward
     * @param privKeyHex: the private key of username
     * @param seq: the sequence number of user for the next transaction
     */
    claim(username: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * ClaimInterest claims interest of a certain user.
     * It composes ClaimInterestMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who wants to claim interest
     * @param privKeyHex: the private key of username
     * @param seq: the sequence number of user for the next transaction
     */
    claimInterest(username: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * UpdateAccount updates account related info in jsonMeta which are not
     * included in AccountInfo or AccountBank.
     * It composes UpdateAccountMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who wants to update account meta
     * @param json_meta: the newly updated meta
     * @param privKeyHex: the private key of user
     * @param seq: the sequence number of user for the next transaction
     */
    updateAccount(username: string, json_meta: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * Recover resets all keys of a user in case of losing or compromising.
     * It composes RecoverMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who wants to recover account
     * @param new_reset_public_key: new reset public key for user
     * @param new_transaction_public_key: new transaction public key for user
     * @param new_app_public_key: new app public key for user
     * @param privKeyHex: the old private key of user
     * @param seq: the sequence number of user for the next transaction
     */
    recover(username: string, new_reset_public_key: string, new_transaction_public_key: string, new_app_public_key: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * CreatePost creates a new post on blockchain.
     * It composes CreatePostMsg and then broadcasts the transaction to blockchain.
     *
     * @param author: the user who creates the new post
     * @param postID: the post id of the new post
     * @param title: the title of the new post
     * @param content: the content of the new post
     * @param parentAuthor: if this is a comment, parentAuthor is the author of post that this comment is added to
     * @param parentPostID: if this is a comment, parentPostID is the id of post that this comment is added to
     * @param sourceAuthor: if this is a re-post, sourceAuthor should be the original post author
     * @param sourcePostID: if this is a re-post, sourcePostID should be the original post id
     * @param redistributionSplitRate: how much percentage the source post wants to split for re-post
     * @param links: the links of the new post
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of user for the next transaction
     */
    createPost(author: string, postID: string, title: string, content: string, parentAuthor: string, parentPostID: string, sourceAuthor: string, sourcePostID: string, redistributionSplitRate: string, links: Map<string, string>, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * Donate adds a money donation to a post by a user.
     * It composes DonateMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who wants to donate to the post
     * @param author: the author of the post
     * @param amount: the amount LINO token that the user wants to donate
     * @param post_id: the id of the post
     * @param from_app: which app that the donation is from
     * @param memo: memo of the donation
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of user for the next transaction
     */
    donate(username: string, author: string, amount: string, post_id: string, from_app: string, memo: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * ReportOrUpvote adds a report or upvote action to a post.
     * It composes ReportOrUpvoteMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who report or upvote the post
     * @param author: the author of the post
     * @param post_id: the id of the post
     * @param is_report: indicates this is a report if set to true
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of the user for the next transaction
     */
    reportOrUpvote(username: string, author: string, post_id: string, is_report: boolean, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * DeletePost deletes a post from the blockchain. It doesn't actually
     * remove the post from the blockchain, instead it sets IsDeleted to true
     * and clears all the other data.
     * It composes DeletePostMsg and then broadcasts the transaction to blockchain.
     *
     * @param author: the author of the post
     * @param post_id: the id of the post
     * @param privKeyHex: the private key of the author
     * @param seq: the sequence number of the author for the next transaction
     */
    deletePost(author: string, post_id: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * View increases the view count of a post by one.
     * It composes ViewMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who view the post
     * @param author: The author of the post
     * @param post_id: the id of the post
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of the author for the next transaction
     */
    view(username: string, author: string, post_id: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * UpdatePost updates post info with new data.
     * It composes UpdatePostMsg and then broadcasts the transaction to blockchain.
     *
     * @param author: the author of the post
     * @param title: new titile of the post
     * @param post_id: the id of the post
     * @param content: new content of the post
     * @param links: new links of the post
     * @param privKeyHex: the private key of the author
     * @param seq: the sequence number of the author for the next transaction
     */
    updatePost(author: string, title: string, post_id: string, content: string, links: Map<string, string>, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * ValidatorDeposit deposits a certain amount of LINO token for a user
     * in order to become a validator. Before becoming a validator, the user
     * has to be a voter.
     * It composes ValidatorDepositMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who wants to deposit money for being a validator
     * @param deposit: the amount of LINO token the user wants to deposit
     * @param validator_public_key: the validator public key given by Tendermint
     * @param link: the link of the user
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of the user for the next transaction
     */
    validatorDeposit(username: string, deposit: string, validator_public_key: string, link: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * ValidatorWithdraw withdraws part of LINO token from a validator's deposit,
     * while still keep being a validator.
     * It composes ValidatorDepositMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the validator username
     * @param amount: the amount of LINO token the validator wants to withdraw
     * @param privKeyHex: the private key of the validator
     * @param seq: the sequence number of the validator for the next transaction
     */
    validatorWithdraw(username: string, amount: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * ValidatorRevoke revokes all deposited LINO token of a validator
     * so that the user will not be a validator anymore.
     * It composes ValidatorRevokeMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the validator username
     * @param privKeyHex: the private key of the validator
     * @param seq: the sequence number of the validator
     */
    validatorRevoke(username: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * StakeIn deposits a certain amount of LINO token for a user
     * in order to become a voter.
     * It composes model.StakeInMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user whot wants to deposit money for being a voter
     * @param deposit: the amount of LINO token the user wants to deposit
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of the user for the next transaction
     */
    stakeIn(username: string, deposit: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * StakeOut withdraws part of LINO token from a voter's deposit,
     * while still keep being a voter.
     * It composes StakeOutMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the voter username
     * @param amount: the amount of LINO token the voter wants to withdraw
     * @param privKeyHex: the private key of the voter
     * @param seq: the sequence number of the voter for the next transaction
     */
    stakeOut(username: string, amount: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * Delegate delegates a certain amount of LINO token of delegator to a voter, so
     * the voter will have more voting power.
     * It composes DelegateMsg and then broadcasts the transaction to blockchain.
     *
     * @param delegator: the user who wants to delegate money
     * @param voter: the voter that the delegator wants to delegate moeny to
     * @param amount: the amount of LINO token that the delegator wants to delegate
     * @param privKeyHex: the private key of the delegator
     * @param seq: the sequence number of the delegator for the next transaction
     */
    delegate(delegator: string, voter: string, amount: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * DelegatorWithdraw withdraws part of delegated LINO token of a delegator
     * to a voter, while the delegation still exists.
     * It composes DelegatorWithdrawMsg and then broadcasts the transaction to blockchain.
     *
     * @param delegator: the delegator username
     * @param voter: the voter username
     * @param amount: the amount of money that the delegator wants to withdraw
     * @param privKeyHex: the private key of the delegator
     * @param seq: the sequence number of the delegator for the next transaction
     */
    delegatorWithdraw(delegator: string, voter: string, amount: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * DeveloperRegsiter registers a developer with a certain amount of LINO token on blockchain.
     * It composes DeveloperRegisterMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who wants to become a developer
     * @param deposit: the amount of money the user wants to deposit
     * @param website: developer's website
     * @param description: developer's description
     * @param app_meta_data: developer's app meta data
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of the user for the next transaction
     */
    developerRegister(username: string, deposit: string, website: string, description: string, app_meta_data: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * DeveloperUpdate updates a developer info on blockchain.
     * It composes DeveloperUpdateMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the developer's username
     * @param website: new developer's website
     * @param description: new developer's description
     * @param app_meta_data: new developer's app meta data
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of the user for the next transaction
     */
    developerUpdate(username: string, website: string, description: string, app_meta_data: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * DeveloperRevoke reovkes all deposited LINO token of a developer
     * so the user will not be a developer anymore.
     * It composes DeveloperRevokeMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the developer username
     * @param privKeyHex: the private key of the developer
     * @param seq: the sequence number of the developer for the next transaction
     */
    developerRevoke(username: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * GrantPermission grants a certain (e.g. App) permission to
     * an authorized app with a certain period of time.
     * It composes GrantPermissionMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who grants the permission
     * @param authorized_app: the authenticated app of the developer
     * @param validity_period_second: how long does this app is valid
     * @param grant_level: the permission level granted
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of the user for the next transaction
     */
    grantPermission(username: string, authorized_app: string, validity_period_second: number, grant_level: Types.PERMISSION_TYPE, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * RevokePermission revokes the permission given previously to a app.
     * It composes RevokePermissionMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who wants to revoke permission
     * @param public_key: the user's public key that will be revoked
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of the user for the next transaction
     */
    revokePermission(username: string, public_key: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * preAuthorizationPermission grants pre authorization permission to
     * an authorized app with a certain period of time and amount.
     * It composes GrantPermissionMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the user who grants the permission
     * @param authorized_app: the authenticated app of the developer
     * @param validity_period_second: how long does this app is valid
     * @param grant_level: the permission level granted
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of the user for the next transaction
     */
    preAuthorizationPermission(username: string, authorized_app: string, validity_period_second: number, amount: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * ProviderReport reports infra usage of a infra provider in order to get infra inflation.
     * It composes ProviderReportMsg and then broadcasts the transaction to blockchain.
     *
     * @param username: the username of the infra provider
     * @param usage: the amount of data traffic consumed
     * @param privKeyHex: the private key of the user
     * @param seq: the sequence number of the user for the next transaction
     */
    providerReport(username: string, usage: number, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * VoteProposal adds a vote to a certain proposal with agree/disagree.
     * It composes VoteProposalMsg and then broadcasts the transaction to blockchain.
     *
     * @param voter: the voter username
     * @param proposal_id: the proposal id
     * @param result: agree or disagree
     * @param privKeyHex: the private key of the voter
     * @param seq: the sequence number of the voter for the next transaction
     */
    voteProposal(voter: string, proposal_id: string, result: boolean, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * ChangeGlobalAllocationParam changes GlobalAllocationParam with new value.
     * It composes ChangeGlobalAllocationParamMsg and then broadcasts the transaction to blockchain.
     *
     * @param creator: the user who creates the proposal
     * @param parameter: the GlobalAllocationParam
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    changeGlobalAllocationParam(creator: string, parameter: Types.GlobalAllocationParam, reason: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * changeEvaluateOfContentValueParam changes EvaluateOfContentValueParam with new value.
     * It composes ChangeEvaluateOfContentValueParamMsg and then broadcasts the transaction to blockchain.
     *
     * @param creator: the user who creates the proposal
     * @param parameter: the EvaluateOfContentValueParam
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    changeEvaluateOfContentValueParam(creator: string, parameter: Types.EvaluateOfContentValueParam, reason: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * changeInfraInternalAllocationParam changes InfraInternalAllocationParam with new value.
     * It composes ChangeInfraInternalAllocationParamMsg and then broadcasts the transaction to blockchain.
     *
     * @param creator: the user who creates the proposal
     * @param parameter: the InfraInternalAllocationParam
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    changeInfraInternalAllocationParam(creator: string, parameter: Types.InfraInternalAllocationParam, reason: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * changeVoteParam changes VoteParam with new value.
     * It composes ChangeVoteParamMsg and then broadcasts the transaction to blockchain.
     *
     * @param creator: the user who creates the proposal
     * @param parameter: the VoteParam
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    changeVoteParam(creator: string, parameter: Types.VoteParam, reason: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * changeProposalParam changes ProposalParam with new value.
     * It composes ChangeProposalParamMsg and then broadcasts the transaction to blockchain.
     *
     * @param creator: the user who creates the proposal
     * @param parameter: the ProposalParam
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    changeProposalParam(creator: string, parameter: Types.ProposalParam, reason: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * changeDeveloperParam changes DeveloperParam with new value.
     * It composes ChangeDeveloperParamMsg and then broadcasts the transaction to blockchain.
     *
     * @param creator: the user who creates the proposal
     * @param parameter: the DeveloperParam
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    changeDeveloperParam(creator: string, parameter: Types.DeveloperParam, reason: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * changeValidatorParam changes ValidatorParam with new value.
     * It composes ChangeValidatorParamMsg and then broadcasts the transaction to blockchain.
     *
     * @param creator: the user who creates the proposal
     * @param parameter: the ValidatorParam
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    changeValidatorParam(creator: string, parameter: Types.ValidatorParam, reason: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * changeBandwidthParam changes BandwidthParam with new value.
     * It composes ChangeBandwidthParamMsg and then broadcasts the transaction to blockchain.
     *
     * @param creator: the user who creates the proposal
     * @param parameter: the BandwidthParam
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    changeBandwidthParam(creator: string, parameter: Types.BandwidthParam, reason: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * changeAccountParam changes AccountParam with new value.
     * It composes ChangeAccountParamMsg and then broadcasts the transaction to blockchain.
     *
     * @param creator: the user who creates the proposal
     * @param parameter: the AccountParam
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    changeAccountParam(creator: string, parameter: Types.AccountParam, reason: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * changePostParam changes PostParam with new value.
     * It composes ChangePostParamMsg and then broadcasts the transaction to blockchain.
     *
     * @param creator: the user who creates the proposal
     * @param parameter: the PostParam
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    changePostParam(creator: string, parameter: Types.PostParam, privKeyHex: string, reason: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * DeletePostContent deletes the content of a post on blockchain, which is used
     * for content censorship.
     * It composes DeletePostContentMsg and then broadcasts the transaction to blockchain.
     * @param creator: the user who creates the proposal
     * @param postAuthor: the author of the post
     * @param postID: the id of the post
     * @param reason: the reason why to delete post content
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    deletePostContent(creator: string, postAuthor: string, postID: string, reason: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
    /**
     * UpgradeProtocol upgrades the protocol.
     * It composes UpgradeProtocolMsg and then broadcasts the transaction to blockchain.
     * @param creator: the user who creates the proposal
     * @param link: the link of the upgraded protocol
     * @param reason: the reason to make such change
     * @param privKeyHex: the private key of the creator
     * @param seq: the sequence number of the creator for the next transaction
     */
    upgradeProtocol(creator: string, link: string, privKeyHex: string, reason: string, seq: number): Promise<ResultBroadcastTxCommit>;
    _broadcastTransaction(msg: object, msgType: string, privKeyHex: string, seq: number): Promise<ResultBroadcastTxCommit>;
}
export interface RegisterMsg {
    referrer: string;
    register_fee: string;
    new_username: string;
    new_reset_public_key: string;
    new_transaction_public_key: string;
    new_app_public_key: string;
}
export interface TransferMsg {
    sender: string;
    receiver: string;
    amount: string;
    memo: string;
}
export interface FollowMsg {
    follower: string;
    followee: string;
}
export interface UnfollowMsg {
    follower: string;
    followee: string;
}
export interface ClaimMsg {
    username: string;
}
export interface ClaimInterestMsg {
    username: string;
}
export interface RecoverMsg {
    username: string;
    new_reset_public_key: string;
    new_transaction_public_key: string;
    new_app_public_key: string;
}
export interface UpdateAccountMsg {
    username: string;
    json_meta: string;
}
export interface CreatePostMsg {
    author: string;
    post_id: string;
    title: string;
    content: string;
    parent_author: string;
    parent_postID: string;
    source_author: string;
    source_postID: string;
    links: Types.IDToURLMapping[] | null;
    redistribution_split_rate: string;
}
export interface DonateMsg {
    username: string;
    amount: string;
    author: string;
    post_id: string;
    from_app: string;
    memo: string;
}
export interface ReportOrUpvoteMsg {
    username: string;
    author: string;
    post_id: string;
    is_report: boolean;
}
export interface DeletePostMsg {
    author: string;
    post_id: string;
}
export interface ViewMsg {
    username: string;
    author: string;
    post_id: string;
}
export interface UpdatePostMsg {
    author: string;
    post_id: string;
    title: string;
    content: string;
    links: Types.IDToURLMapping[] | null;
}
export interface ValidatorDepositMsg {
    username: string;
    deposit: string;
    validator_public_key: string;
    link: string;
}
export interface ValidatorWithdrawMsg {
    username: string;
    amount: string;
}
export interface ValidatorRevokeMsg {
    username: string;
}
export interface StakeInMsg {
    username: string;
    deposit: string;
}
export interface StakeOutMsg {
    username: string;
    amount: string;
}
export interface DelegateMsg {
    delegator: string;
    voter: string;
    amount: string;
}
export interface DelegatorWithdrawMsg {
    delegator: string;
    voter: string;
    amount: string;
}
export interface DeveloperRegisterMsg {
    username: string;
    deposit: string;
    website: string;
    description: string;
    app_meta_data: string;
}
export interface DeveloperUpdateMsg {
    username: string;
    website: string;
    description: string;
    app_meta_data: string;
}
export interface DeveloperRevokeMsg {
    username: string;
}
export interface GrantPermissionMsg {
    username: string;
    authorized_app: string;
    validity_period_second: number;
    grant_level: Types.PERMISSION_TYPE;
}
export interface RevokePermissionMsg {
    username: string;
    public_key: string;
}
export interface PreAuthorizationMsg {
    username: string;
    authorized_app: string;
    validity_period_second: number;
    amount: string;
}
export interface ProviderReportMsg {
    username: string;
    usage: number;
}
export interface DeletePostContentMsg {
    creator: string;
    permlink: string;
    reason: string;
}
export interface VoteProposalMsg {
    voter: string;
    proposal_id: string;
    result: boolean;
}
export interface UpgradeProtocolMsg {
    creator: string;
    link: string;
    reason: string;
}
export interface ChangeGlobalAllocationParamMsg {
    creator: string;
    parameter: Types.GlobalAllocationParam;
    reason: string;
}
export interface ChangeEvaluateOfContentValueParamMsg {
    creator: string;
    parameter: Types.EvaluateOfContentValueParam;
    reason: string;
}
export interface ChangeInfraInternalAllocationParamMsg {
    creator: string;
    parameter: Types.InfraInternalAllocationParam;
    reason: string;
}
export interface ChangeVoteParamMsg {
    creator: string;
    parameter: Types.VoteParam;
    reason: string;
}
export interface ChangeProposalParamMsg {
    creator: string;
    parameter: Types.ProposalParam;
    reason: string;
}
export interface ChangeDeveloperParamMsg {
    creator: string;
    parameter: Types.DeveloperParam;
    reason: string;
}
export interface ChangeValidatorParamMsg {
    creator: string;
    parameter: Types.ValidatorParam;
    reason: string;
}
export interface ChangeBandwidthParamMsg {
    creator: string;
    parameter: Types.BandwidthParam;
    reason: string;
}
export interface ChangeAccountParamMsg {
    creator: string;
    parameter: Types.AccountParam;
    reason: string;
}
export interface ChangePostParamMsg {
    creator: string;
    parameter: Types.PostParam;
    reason: string;
}