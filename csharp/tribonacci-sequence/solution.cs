// https://www.codewars.com/kata/556deca17c58da83c00002db

public class Xbonacci
{
  public double[] Tribonacci(double[] signature, int n)
  {
    double[] tribs = new double[n];
    
    for (int i = 0; i < n; i ++)
    {
      if (i < 3)
      {
        tribs[i] = signature[i];
      }
      else
      {
        tribs[i] = tribs[i-3] + tribs[i-2] + tribs[i-1];
      }
    }
    
    return tribs;
  }
}

