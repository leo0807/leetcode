public class Solution
{
    public bool Check(int[] nums)
    {
        int k = 0;
        int n = nums.Length;
        for (int i = 0; i < n; i++)
        {
            if (nums[i] > nums[(i + 1) % n])
            {
                k++;
            }
            if (k > 1) return false;
        }
        return true;
    }
}
