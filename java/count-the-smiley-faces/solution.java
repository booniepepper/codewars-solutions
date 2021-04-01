// https://www.codewars.com/kata/583203e6eb35d7980400002a

import java.util.*;

public class SmileFaces {
  
  public static int countSmileys(List<String> emojiArr) {
      int count = 0;
      for (String emoji : emojiArr) {
          if (emoji.matches("[:;][-~]?[)D]")) {
              count++;
          }
      }
      return count;
  }
}

