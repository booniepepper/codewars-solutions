// https://www.codewars.com/kata/55908aad6620c066bc00002a

public class XO {
  
  public static boolean getXO (String str) {
      str = str.toLowerCase().replaceAll("[^xo]", "");
      if (str.length() % 2 != 0) {
          return false;
      }
      return str.length() / 2 == str.replaceAll("x", "").length();
  }
}

