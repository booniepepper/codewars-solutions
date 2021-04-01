// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

import java.lang.Integer;
import java.util.Arrays;
import java.util.stream.Stream;

public class Sum {

  public static int arrayPlusArray(int[] arr1, int[] arr2) {
    return Stream.of(arr1, arr2)
      .flatMapToInt(Arrays::stream)
      .sum();
  }

}

