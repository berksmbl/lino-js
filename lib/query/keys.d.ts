declare namespace Keys {
    const KVSTOREKEYS: {
        MainKVStoreKey: string;
        AccountKVStoreKey: string;
        PostKVStoreKey: string;
        ValidatorKVStoreKey: string;
        GlobalKVStoreKey: string;
        VoteKVStoreKey: string;
        InfraKVStoreKey: string;
        DeveloperKVStoreKey: string;
        ParamKVStoreKey: string;
        ProposalKVStoreKey: string;
    };
    function getValidatorListKey(): string;
    function getValidatorKey(accKey: string): string;
    function getVotePrefix(id: string): string;
    function getVoteKey(proposalID: string, voter: string): string;
    function getDelegatorPrefix(me: string): string;
    function getDelegationKey(me: string, myDelegator: string): string;
    function getVoterKey(me: string): string;
    function getDelegateeListKey(me: string): string;
    function getDeveloperKey(accKey: string): string;
    function getDeveloperListKey(): string;
    function getInfraProviderKey(accKey: string): string;
    function getInfraProviderListKey(): string;
    function getAccountInfoKey(accKey: string): string;
    function getAccountBankKey(accKey: string): string;
    function getAccountMetaKey(accKey: string): string;
    function getGrantKeyListKey(accKey: string): string;
    function getRewardKey(accKey: string): string;
    function getRelationshipPrefix(me: string): string;
    function getRelationshipKey(me: string, other: string): string;
    function getFollowerPrefix(me: string): string;
    function getFollowingPrefix(me: string): string;
    function getFollowerKey(me: string, myFollower: string): string;
    function getFollowingKey(me: string, myFollowing: string): string;
    function getBalanceHistoryPrefix(me: string): string;
    function getBalanceHistoryKey(me: string, atWhen: string): string;
    function getPostInfoKey(postKey: string): string;
    function getPostKey(author: string, postID: string): string;
    function getPostMetaKey(postKey: string): string;
    function getPostLikePrefix(postKey: string): string;
    function getPostLikeKey(postKey: string, likeUser: string): string;
    function getPostReportOrUpvotePrefix(postKey: string): string;
    function getPostReportOrUpvoteKey(postKey: string, user: string): string;
    function getPostViewPrefix(postKey: string): string;
    function getPostViewKey(postKey: string, viewUser: string): string;
    function getPostCommentPrefix(postKey: string): string;
    function getPostCommentKey(postKey: string, commentPostKey: string): string;
    function getPostDonationPrefix(postKey: string): string;
    function getPostDonationKey(postKey: string, donateUser: string): string;
    function getProposalKey(proposalID: string): string;
    function getProposalListKey(): string;
    function getEvaluateOfContentValueParamKey(): string;
    function getGlobalAllocationParamKey(): string;
    function getInfraInternalAllocationParamKey(): string;
    function getDeveloperParamKey(): string;
    function getVoteParamKey(): string;
    function getValidatorParamKey(): string;
    function getProposalParamKey(): string;
    function getCoinDayParamKey(): string;
    function getBandwidthParamKey(): string;
    function getAccountParamKey(): string;
}
export default Keys;
