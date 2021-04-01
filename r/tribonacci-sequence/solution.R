# https://www.codewars.com/kata/556deca17c58da83c00002db

tribonacci <- function(sig, n) {
  if (n <= 0) {
    c()
  } else if (n <= 3) {
    sig[1:n];
  } else {
    res = sig[1:3];
    
    for (i in 4:n) {
      res[i] = res[i-3] + res[i-2] + res[i-1];
    }
    
    res
  }
}

