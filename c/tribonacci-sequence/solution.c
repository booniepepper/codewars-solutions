// https://www.codewars.com/kata/556deca17c58da83c00002db

#include <stdlib.h>

typedef long long lol;

// Yay preprocessing.
// Inspired recently by CNoEvil: https://github.com/shakna-israel/cnoevil
#define nonzero(n) if (n == 0) { return NULL; }
#define init_lols(n) calloc(n, sizeof(lol))
#define sum_prev_three(arr, i) arr[i-3] + arr[i-2] + arr[i-1]

lol *tribonacci(const lol signature[3], lol n) {
  nonzero(n);
  
  lol *out = init_lols(n);
  
  for (lol i = 0; i < n; i++) {
      if (i >= 3) {
        out[i] = sum_prev_three(out, i);
      } else {
        out[i] = signature[i];
      }
  }
  return out;
}

