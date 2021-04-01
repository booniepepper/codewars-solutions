// https://www.codewars.com/kata/515f51d438015969f7000013

using System;
using System.Linq;

public class Kata {
  public static int[][] Pyramid(int n) {
    int[][] result = new int[n][];
    for(int i = 0; i < n; i++)
    {
       result[i]= Enumerable.Repeat(1, i +1).ToArray();
    
    }
    return result;
  }
}

