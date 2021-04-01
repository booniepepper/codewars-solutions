// https://www.codewars.com/kata/5583d268479559400d000064

import com.google.common.base.Splitter;
import java.util.stream.StreamSupport;

class Solution {

  public static String binaryToText(String binary) {
    if (binary.length() == 0) { return ""; }
  
    var text = new StringBuilder();
    var chunks = Splitter.fixedLength(8).split(binary).spliterator();

    StreamSupport.stream(chunks, false)
      .map(b -> Integer.parseInt(b, 2))
      .mapToInt(Integer::intValue)
      .forEach(i -> text.append((char) i));

    return text.toString();
  }

}

