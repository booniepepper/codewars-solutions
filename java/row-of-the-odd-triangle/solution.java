// https://www.codewars.com/kata/5d5a7525207a674b71aa25b5

import java.util.stream.LongStream;

public class UserSolution {
  public static long[] oddRow(int row) {
    final long base = (long) row * (row - 1);
    return LongStream.range(0, row).map(n -> base + n * 2 + 1).toArray();
  }
}

