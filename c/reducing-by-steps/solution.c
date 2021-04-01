// https://www.codewars.com/kata/56efab15740d301ab40002ee

#include <stdlib.h>

typedef long long lol;
#define abs(a) ((a) >= 0 ? (a) : 0 - (a))

lol _gcdi(lol a, lol b) {
  return b == 0 ? a : _gcdi(b, a % b);
}
lol gcdi(lol a, lol b) {
  return _gcdi(abs(a), abs(b));
}
lol lcmu(lol a, lol b) {
  return abs(a * b) / gcdi(a, b);
}
lol som(lol a, lol b) {
  return a + b;
}
lol maxi(lol a, lol b) {
  return a >= b ? a : b;
}
lol mini(lol a, lol b) {
  return a <= b ? a : b;
}

typedef lol (*lol_fun) (lol, lol);

lol *operArray(lol_fun f, lol* arr, int arr_len, lol init) {
  lol *out = calloc(arr_len, sizeof(lol));
  
  out[0] = f(init, arr[0]);
  for (int i = 1; i < arr_len; i++) {
    out[i] = f(out[i - 1], arr[i]);
  }
  
  return out;
}

