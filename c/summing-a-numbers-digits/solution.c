// https://www.codewars.com/kata/52f3149496de55aded000410

#include <stdlib.h>

int sum_digits(int n) {
  n = abs(n);
  int sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = n / 10;
  }
  return sum;
}

