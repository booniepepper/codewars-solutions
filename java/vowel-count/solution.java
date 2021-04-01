// https://www.codewars.com/kata/54ff3102c1bad923760001f3

public class Vowels {

  public static int getCount(String str) {
    return str.replaceAll("[^aeiou]","").length();
  }

}

