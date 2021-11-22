# DFS solution
class Solution:

    def serialize(self, root):
        # write your code here
        if not root:
            return ['#']
        ans = []
        ans.append(str(root.val))
        ans += self.serialize(root.left)
        ans += self.serialize(root.right)
        return ans

    def deserialize(self, data):
        # write your code here
        ch = data.pop(0)
        if ch == '#':
            return None
        else:
            root = TreeNode(int(ch))
        root.left = self.deserialize(data)
        root.right = self.deserialize(data)
        return root

# BFS solution


class Solution:

    def serialize(self, root):
        # write your code here
        if not root:
            return ['#']
        q = [root]
        ans = []
        while q:
            temp = q.pop(0)
            if not temp:
                ans.append('#')
            else:
                ans.append(str(temp.val))
                q.append(temp.left)
                q.append(temp.right)
        return ans

    def deserialize(self, data):
        # write your code here
        if data[0] == '#':
            return None
        root = TreeNode(int(data.pop(0)))
        q = [root]
        isLeft = True
        while data:
            ch = data.pop(0)
            if ch != '#':
                node = TreeNode(int(ch))
                q.append(node)
                if isLeft:
                    q[0].left = node
                else:
                    q[0].right = node
            if not isLeft:
                q.pop(0)
            isLeft = not isLeft
        return root
