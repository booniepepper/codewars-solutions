// https://www.codewars.com/kata/559590633066759614000063

class MinMax {
    public static int[] minMax(int[] nums) {
        int min = nums[0];
        int max = nums[0];
        for (int num : nums) {
            if (num < min) {
                min = num;
                continue;
            }
            else if (max < num) {
                max = num;
                continue;
            }
        }
        return new int[]{min, max};
    }
}

