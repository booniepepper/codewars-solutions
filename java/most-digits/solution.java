// https://www.codewars.com/kata/58daa7617332e59593000006

public class MostDigits {
  public static int findLongest(int[] nums) {
      int longestNum = nums[0];
      int longestDigits = numDigits(longestNum);
      for (int num : nums) {
          int digits = numDigits(num);
          if (digits > longestDigits) {
              longestNum = num;
              longestDigits = digits;
          }
      }
      return longestNum;
  }
  
  public static int numDigits(int num) {
      num = Math.abs(num);
      
      int digits = 1;
      while (num > 0) {
          digits++;
          num /= 10;
      }
      return digits;
  }
}

