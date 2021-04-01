// https://www.codewars.com/kata/576b93db1129fcf2200001e6

public class Kata {
  public static int sum(int[] numbers) {
    if (numbers == null || numbers.length < 2) {
        return 0;
    }
    
    int sum = 0;
    int min = Math.min(numbers[0], numbers[1]);
    int max = Math.max(numbers[0], numbers[1]);
    
    for (int i = 2; i < numbers.length; i++) {
        if (max < numbers[i]) {
          sum += max;
          max = numbers[i];
          continue;
        }
        else if (numbers[i] < min) {
          sum += min;
          min = numbers[i];
          continue;
        }
        sum += numbers[i];
    }
    
    return sum;
  }
}

