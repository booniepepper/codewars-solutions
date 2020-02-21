// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/solutions/c/me

#include <stddef.h>

long sum_arr(const int *a, size_t na)
{
  long sum = 0;
  for (int i = 0; i < na; i++) {
    sum += a[i];
  }
  return sum;
}

long arr_plus_arr(const int *a,  const int *b, size_t na, size_t nb)
{
    return sum_arr(a, na) + sum_arr(b, nb);    
}
