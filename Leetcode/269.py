# 269. 火星词典
# 问题：
# 现有一种使用字母的全新语言，这门语言的字母顺序与英语顺序不同。
# 假设，您并不知道其中字母之间的先后顺序。但是，会收到词典中获得一个 不为空的 单词列表。
# 因为是从词典中获得的，所以该单词列表内的单词已经 按这门新语言的字母顺序进行了排序。
#
# 您需要根据这个输入的列表，还原出此语言中已知的字母顺序。
#
# 输入：
# [
#  "wrt",
#  "wrf",
#  "er",
#  "ett",
#  "rftt"
# ]
# 输出：["wertf"]
#
# 输入：
# [
#  "z",
#  "x"
# ]
#
# 输出: ["zx"]
#
#
# 输入：
# [
#  "z",
#  "x",
#  "z"
# ]
#
# 解释: 此顺序是非法的，因此返回 “”。
# https://blog.csdn.net/yixieling4397/article/details/108847470?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.control&spm=1001.2101.3001.4242
#

from typing import Deque


class Solution:
    def alienOrder(self, words: List[str]) -> str:
        # 每个字母代表图的一个顶点
        # 邻接表表示有向图
        graph = {}
        # 构建图顶点
        for word in words:
            for w in word:
                graph[w] = []
        # 单词两两比较，确定图的方向
        for i in range(len(words) - 1):
            j = 0
            while j < len(words[i]) and j < len(words[i + 1]):
                if words[i][j] != words[i + 1][j]:
                    graph[words[i][j]].append(words[i][j])
                    break
                j += 1
        # 拓扑排序输出字母顺序
        in_dgrees = {}
        topo_result = []
        for k in graph:
            in_dgrees[k] = 0  # 初始化顶点入度为0
        for values in graph.values():
            for val in values:
                in_dgrees[val] += 1  # 计算每个顶点的入度
        zeros = [k for (k, v) in in_dgrees.items() if v == 0]
        dequeues = []  # 出队元素
        while zeros != []:
            node = zeros.pop()
            dequeues.append(node)
            topo_result.append(node)
            for value in graph[node]:
                in_dgrees[value] -= 1  # 删除入度为0的节点后，该节点指向的节点减一
                if in_dgrees[value] == 0:
                    zeros.append(value)
        # 判断非法顺序 （图中有环）
        is_unval = False
        if(len(dequeues) != len(graph)):  # 出队元素个数不等于图顶点个数，说明有环
            is_unval = True
        # abc排在ab前面，也属于非法输入
        for i in range(len(words) - 1):
            if len(words[i]) > len(words[i + 1]) and words[i][:len(words[i + 1])] == words[i + 1]:
                is_unval = True
                break

        if is_unval:
            return ""
        # 无法判断顺序的返回随机顺序
        if not is_unval and topo_result == []:
            return "".join([k for k in graph])
        return "".join(topo_result)
