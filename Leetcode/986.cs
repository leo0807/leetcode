public class Solution {
    public int[][] IntervalIntersection(int[][] firstList, int[][] secondList) {
        List<int[]> res = new List<int[]>();
        int i = 0, j = 0;
        while(i != firstList.Length && j != secondList.Length){
            int low = Math.Max(firstList[i][0], secondList[j][0]);
            int high = Math.Min(firstList[i][1], secondList[j][1]);
            
            if(low <= high){
                res.Add(new int[] {low, high});
            }
            if(firstList[i][1] < secondList[j][1]){
                i++;
            }else{
                j++;
            }
        }
        return res.ToArray();
    }
}