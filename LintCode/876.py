# 首先, 我们要确定循环字符串是哪个, 然后再枚举断点的位置.

# 每个字符串有翻转/不翻转的选择, 显然, 我们应该取其中字典序较大的那个连入循环字符串.

# 但是, 有一个例外, 就是我们枚举的断点所在的字符串, 不一定取字典序较大的方式, 所以这道题的处理流程就是:

# 1. 将每个字符串翻转/不翻转较大字典序的那个连入循环字符串 loopstr
# 2. 枚举断点位置所在的字符串, 仅仅将该字符串置为与 loopstr 中相反的形式, 得到 rloopstr
# 3. 在该字符串内枚举断点位置, 在 loopstr 和 rloopstr 中取较大的, 维护答案
# class Solution:
"""
    @param strs: a list of string
    @return: return a string
    """


def splitLoopedString(self, strs):
    ans, s = "a", ""
    for i in range(len(strs)):
        p = strs[i][::-1]
        s += max(p, strs[i])
    st = 0
    for i in range(len(strs)):
        p, mid = strs[i][::-1], s[st + len(strs[i]):] + s[0:st]
        for j in range(len(p)):
            if(strs[i][j] >= ans[0]):
                ans = max(ans, strs[i][j:] + mid + strs[i][0:j])
            if(p[j] >= ans[0]):
                ans = max(ans, p[j:] + mid + p[0:j])
        st += len(strs[i])
    return ans
