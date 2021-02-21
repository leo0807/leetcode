# -*- coding:utf-8 -*-
class Solution:
    def ReverseSentence(self, s):
        # write code here
        res = ''
        s = s.split(' ')
        for i in range(len(s) - 1, -1, -1):
            res += s[i] +' '
        return res[:-1]