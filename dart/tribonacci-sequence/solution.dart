// https://www.codewars.com/kata/556deca17c58da83c00002db

List<num> tribonacci(List<num> sig, int n) {
  List<num> ts = new List(n);
  
  for (int i = 0; i < n; i++) {
    if (i >= 3) {
      ts[i] = ts[i-3] + ts[i-2] + ts[i-1];
    }
    else {
      ts[i] = sig[i];
    }
  }
  
  return ts;
}

