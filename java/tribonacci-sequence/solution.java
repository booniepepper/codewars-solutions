// https://www.codewars.com/kata/556deca17c58da83c00002db

public class Xbonacci {
  public double[] tribonacci(double[] signature, int n) {
    var result = new double[n];
    
    for (int i = 0; i < n; i++) {
      if (i >= 3) {
        result[i] = result[i-3] + result[i-2] + result[i-1];
      } else {
        result[i] = signature[i];
      }
    }
    
    return result;
  }
}

