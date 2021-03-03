public class Solution {
    public string ModifyString(string s) {
        string alphabet = "abcdefghijklmnopqrstuvwxyz";
        string str = string.Empty;
        int length = s.Length;
        int curIndex = 0;
        for(int i = 0; i < length; i++){
            if(s[i].ToString() != "?"){
                // Console.WriteLine(1);
                str += s[i];
            }else{
                while((i - 1 >= 0 && str[i - 1] == alphabet[curIndex])
                     || (i + 1 < length && s[i + 1] == alphabet[curIndex])){
                    curIndex = (curIndex + 1) % 26;
                }
                str += alphabet[curIndex];
            }
        }
        return str;
    }
}

