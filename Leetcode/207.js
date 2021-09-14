/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let indegres = new Array(numCourses).fill(0);
    // 若最终res为0，即表示所有课程都没有入度
    let res = numCourses;
    const n = prerequisites.length;
    // 设置入度，每有一个前置课程，入度加一
    for(const i of prerequisites){
        indegres[i[0]]++;
    }
    // 将入度为0的课程添加到一个数组
    // 入度为0，表示这门课程可以进修
    const queue = [];
    for(let i = 0; i < numCourses; i++){
        if(indegres[i] === 0){
            // res--;
            queue.push(i);
        }
    }
    // 所有课程都可以学习，即结束
    while(queue.length){
        // 提出一个可以进修的课程
        const curr = queue.shift();
        // 如果当前课程是某一个课程的前置课程
        // 则将该前置课程的入度减少1
        for(const i of prerequisites){
            // 已经学过此课程，跳过
            if(indegres[i[0]] === 0) continue;
            if(i[1] === curr){
                indegres[i[0]]--;
            }
            // 前置课程入度为0， 即可进修
            if(indegres[i[0]] === 0){
                queue.push(i[0]);
            }
        }
    }
    for(const i of indegres){
        if(i === 0) res--;
    }
    if(res == 0){
        return true;
    }else{
        return false;
    }
};