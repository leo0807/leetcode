// Problem Statement#
// There are ‘N’ tasks, labeled from ‘0’ to ‘N - 1’. Each task can have some prerequisite tasks which need to be completed before it can be scheduled.Given the number of tasks and a list of prerequisite pairs, write a method to print all possible ordering of tasks meeting all prerequisites.

//     Example 1:

// Input: Tasks = 3, Prerequisites = [0, 1], [1, 2]
// Output: [0, 1, 2]
// Explanation: There is only possible ordering of the tasks.
//     Example 2:

// Input: Tasks = 4, Prerequisites = [3, 2], [3, 0], [2, 0], [2, 1]
// Output:
// 1)[3, 2, 0, 1]
// 2)[3, 2, 1, 0]
// Explanation: There are two possible orderings of the tasks meeting all prerequisites.
//     Example 3:

// Input: Tasks = 6, Prerequisites = [2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
// Output:
// 1)[0, 1, 4, 3, 2, 5]
// 2)[0, 1, 3, 4, 2, 5]
// 3)[0, 1, 3, 2, 4, 5]
// 4)[0, 1, 3, 2, 5, 4]
// 5)[1, 0, 3, 4, 2, 5]
// 6)[1, 0, 3, 2, 4, 5]
// 7)[1, 0, 3, 2, 5, 4]
// 8)[1, 0, 4, 3, 2, 5]
// 9)[1, 3, 0, 2, 4, 5]
// 10)[1, 3, 0, 2, 5, 4]
// 11)[1, 3, 0, 4, 2, 5]
// 12)[1, 3, 2, 0, 5, 4]
// 13)[1, 3, 2, 0, 4, 5]


function print_orders(tasks, prerequisites) {
    const sortedOrder = [];
    if (tasks <= 0) {
        return sortedOrder;
    }

    // a. Initialize the graph
    const inDegree = Array(tasks).fill(0); // count of incoming edges
    const graph = Array(tasks).fill(0).map(() => Array()); // adjacency list graph

    // b. Build the graph
    prerequisites.forEach((prerequisite) => {
        const parent = prerequisite[0],
            child = prerequisite[1];
        graph[parent].push(child); // put the child into it's parent's list
        inDegree[child]++; // increment child's inDegree
    });


    // c. Find all sources i.e., all vertices with 0 in-degrees
    const sources = [];
    for (i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i);
        }
    }

    print_all_topological_sorts(graph, inDegree, sources, sortedOrder);
}

function print_all_topological_sorts(graph, inDegree, sources, sortedOrder) {
    if (sources.length > 0) {
        for (let i = 0; i < sources.length; i++) {
            const vertex = sources[i];
            sortedOrder.push(vertex);
            const sourcesForNextCall = sources.slice(0); // clone current sources
            // only remove the current source, all other sources should remain in the queue for the next call
            sourcesForNextCall.splice(sourcesForNextCall.indexOf(vertex), 1);
            // get the node's children to decrement their in-degrees
            graph[vertex].forEach((child) => { // get the node's children to decrement their in-degrees
                inDegree[child]--;
                if (inDegree[child] === 0) {
                    sourcesForNextCall.push(child);
                }
            });

            // recursive call to print other orderings from the remaining (and new) sources
            print_all_topological_sorts(graph, inDegree, sourcesForNextCall, sortedOrder);

            // backtrack, remove the vertex from the sorted order and put all of its children back to consider
            // the next source instead of the current vertex
            sortedOrder.splice(sortedOrder.indexOf(vertex), 1);
            for (p = 0; p < graph[vertex].length; p++) {
                inDegree[graph[vertex][p]] += 1;
            }
        }
    }

    // if sortedOrder doesn't contain all tasks, either we've a cyclic dependency between tasks, or
    // we have not processed all the tasks in this recursive call
    if (sortedOrder.length === inDegree.length) {
        console.log(sortedOrder);
    }
}


console.log('Task Orders: ');
print_orders(3, [
    [0, 1],
    [1, 2],
]);

console.log('Task Orders: ');
print_orders(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
]);

console.log('Task Orders: ');
print_orders(6, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
]);