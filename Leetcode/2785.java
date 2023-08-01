class Solution {
    private final static char[] CONSTANTS = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
    public String sortVowels(String s) {
        String str = new String(CONSTANTS);
        int n = s.length();
        ArrayList<Character> vowels = new ArrayList<>();
        ArrayList<Integer> positions = new ArrayList<>();
        for (int i = 0; i < n; i++){
            char ch = s.charAt(i);
            if (str.indexOf(ch) != -1){
                vowels.add(ch);
                positions.add(i);
            }
        }
        Collections.sort(vowels);
        char[] ans = s.toCharArray();
        for(int i = 0; i < positions.size(); i++){
            ans[positions.get(i)] = vowels.get(i);
        }
        return new String(ans);
    }
}