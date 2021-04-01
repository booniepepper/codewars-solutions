// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] nums) {
        int min = nums[0];
        for (int num : nums) {
            if (num < min) {
                min = num;
            }
        }
        return min;
    }
}

