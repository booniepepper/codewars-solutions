// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

public class PangramChecker {
  private static final String MATCH_FORMAT = "[a-z]*%s[a-z]*";
  
  public boolean check(String sentence){
    sentence = sentence.toLowerCase().replaceAll("[^a-z]", "");
    
    for (char c = 'a'; c <= 'z'; c++) {
        if (!sentence.matches(String.format(MATCH_FORMAT, c))) {
            return false;
        }
    }
    
    return true;
  }
}

