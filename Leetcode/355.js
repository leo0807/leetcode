/**
 * Initialize your data structure here.
 */
var Twitter = function () {
    this.followMap = {}
    this.postMap = new Map()
    this.latestPostId = 0
}

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    const postTime = this.latestPostId++
    let tweeList = [{ tweetId, postTime }]
    if (this.postMap.has(userId)) {
        tweeList = tweeList.concat(this.postMap.get(userId))
    }
    this.postMap.set(userId, tweeList)
}

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    const followeeIdList = this.followMap[userId] ? [...this.followMap[userId]] : []
    const tweeList = []
    const userIds = [...new Set(followeeIdList.concat([userId]))]
    userIds.forEach(uid => {
        if (this.postMap.has(uid)) {
            tweeList.push(...this.postMap.get(uid).slice(0, 10))
        }
    })
    tweeList.sort((a, b) => b.postTime - a.postTime)

    return tweeList.slice(0, 10).map(item => item.tweetId)
}

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (this.followMap[followerId]) {
        this.followMap[followerId].add(followeeId)
    } else {
        this.followMap[followerId] = new Set([followeeId])
    }
}

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.followMap[followerId]) {
        this.followMap[followerId].delete(followeeId)
    }
}
