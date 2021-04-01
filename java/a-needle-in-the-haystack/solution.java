// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

public class Kata {
  public static String findNeedle(Object[] haystack) {
    for (int i = 0; i < haystack.length; i++) {
      if (haystack[i] != null && haystack[i].equals("needle")) {
        return "found the needle at position " + i;
      }
    }
    return "no needle found";
  }
}

