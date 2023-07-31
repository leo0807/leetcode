class Solution {
    private static final String vowels = "aeiouAEIOU";
    public String reverseVowels(String s) {
        int left = 0, right = s.length() - 1;
        char[] arr = s.toCharArray();
        while(left < right){
            while(left < right && !vowels.contains(arr[left] + "")){
                left++;
            }
            while(left < right && !vowels.contains(arr[right] + "")){
                right--;
            }
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        return new String(arr);
    }
}