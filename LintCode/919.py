"""
Definition of Interval.
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""
from heapq import *


class Solution:
    """
    @param intervals: an array of meeting time intervals
    @return: the minimum number of conference rooms required
    """

    def minMeetingRooms(self, intervals):
        # Write your code here
        intervals.sort(key=lambda x: x.start)
        minRooms = 0
        minHeap = []
        for interval in intervals:
            while(len(minHeap) > 0 and interval.start >= minHeap[0]):
                heappop(minHeap)
            heappush(minHeap, interval.end)
            minRooms = max(minRooms, len(minHeap))
        return minRooms
