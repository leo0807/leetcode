class Solution(object):
    def canCompleteCircuit(self, gas, cost):
        # a 就是那个数组
        a = []
        for i in range(len(gas)):
            a.append(gas[i] - cost[i])

        if sum(a) < 0:
            return -1

        start = 0
        all_money = 0
        for i in range(len(a)):
            all_money += a[i]
            if all_money < 0:
                all_money = 0
                start = i+1

        return start
