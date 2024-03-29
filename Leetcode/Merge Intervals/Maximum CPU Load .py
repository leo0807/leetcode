# We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

# Example 1:

# Jobs: [[1,4,3], [2,5,4], [7,9,6]]
# Output: 7
# Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the
# jobs are running at the same time i.e., during the time interval (2,4).
# Example 2:

# Jobs: [[6,7,10], [2,4,11], [8,12,15]]
# Output: 15
# Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.
# Example 3:

# Jobs: [[1,4,2], [2,4,1], [3,6,5]]
# Output: 8
# Explanation: Maximum CPU load will be 8 as all jobs overlap during the time interval [3,4].
from heapq import *


class job:
    def __init__(self, start, end, cpu_load):
        self.start = start
        self.end = end
        self.cpu_load = cpu_load

    def __lt__(self, other):
        # min heap based on job.end
        return self.end < other.end


def find_max_cpu_load(jobs):
    # sort the jobs by start time
    current_cpu_load = 0
    max_cpu_load = 0
    minHeap = []
    jobs.sort(key=lambda x: x.start)
    for job in jobs:
        while(len(minHeap) > 0 and job.start >= minHeap[0].end):
            current_cpu_load -= heappop(minHeap).cpu_load
        heappush(minHeap, job)
        current_cpu_load += job.cpu_load
        max_cpu_load = max(max_cpu_load, current_cpu_load)
    return max_cpu_load


def main():
    print("Maximum CPU load at any time: " +
          str(find_max_cpu_load([job(1, 4, 3), job(2, 5, 4), job(7, 9, 6)])))
    print("Maximum CPU load at any time: " +
          str(find_max_cpu_load([job(6, 7, 10), job(2, 4, 11), job(8, 12, 15)])))
    print("Maximum CPU load at any time: " +
          str(find_max_cpu_load([job(1, 4, 2), job(2, 4, 1), job(3, 6, 5)])))


main()
