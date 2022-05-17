    public static List<Integer> rotateLeft(int d, List<Integer> arr) {
    // Write your code here
        d %= arr.size();
        for(int i = 0; i < d; i++){
            Integer x = arr.get(0);
            arr.remove(arr.get(0));
            arr.add(x); 
        }
        return arr;
    }