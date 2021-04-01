// https://www.codewars.com/kata/555eded1ad94b00403000071

public class NthSeries {
  
  public static String seriesSum(int n) {
    double sum = 0;
    double d = 1.0;

    for (int i = 0; i < n; i++, d += 3.0) {
        sum += 1 / d;
    }
    
    return String.format("%.2f", sum);
  }
}

