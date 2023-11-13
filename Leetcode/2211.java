class Solution {
    public int countCollisions(String directions) {
         char [] arr = directions.toCharArray();
         
         int left = 0, right  = arr.length - 1;
         while(left < arr.length && arr[left] == 'L'){
             left++;
         }
         while(right >= 0 && arr[right] == 'R'){
             right--;
         }

        int  ans = 0;
        while(left <= right){
             if(arr[left] != 'S'){
                 ans++;
             }
             left++;
        }

         return ans;
    }
}