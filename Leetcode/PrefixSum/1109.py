class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        counter = [0] * (n + 1)

        for i, j, k in bookings:
            counter[i - 1] += k
            if j < n: counter[j] -= k
        for i in range(n + 1):
            counter[i] += counter[i - 1]
        return counter[:-1]