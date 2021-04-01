// https://www.codewars.com/kata/514b92a657cdc65150000006

using System;
using System.Collections.Generic;
using System.Linq;

public static class Kata
{
  public static int Solution(int until)
  {
    if (until < 3) {
      return 0;
    }
    return Enumerable.Range(1, until-1)
      .Where(n => n % 3 == 0 || n % 5 == 0)
      .Sum();
  }
}

