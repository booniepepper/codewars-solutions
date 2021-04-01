// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

import java.util.Map;
import java.util.HashMap;

public class Kata {
  private static Map<String, String> strongerThan;
  
  static {
      strongerThan = new HashMap<>();
      strongerThan.put("rock","scissors");
      strongerThan.put("scissors","paper");
      strongerThan.put("paper","rock");
  }
  
  public static String rps(String p1, String p2) {
    if (p1.equalsIgnoreCase(p2)) {
        return "Draw!";
    }
    else if (strongerThan.get(p1).equals(p2)) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
  }
}

