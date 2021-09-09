class Solution {
    public int countDigitOne(int n) {
        //高位
        int high = n;
        //低位
        int low = 0;
        //当前位
        int cur = 0;
        int count = 0;
        int num = 1;
        while (high != 0 || cur != 0) {
            cur = high % 10;
            high /= 10;
            //这里我们可以提出 high * num 因为我们发现无论为几，都含有它 
            if (cur == 0) count += high * num;
            else if (cur == 1) count += high * num + 1 + low; 
            else count += (high + 1) * num;
            //低位
            low = cur * num + low;                  
            num *= 10;
        }
        return count;
    }
}

作者：chefyuan
链接：https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/solution/dong-hua-mo-ni-wo-tai-xi-huan-zhe-ge-ti-vxzwc/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。