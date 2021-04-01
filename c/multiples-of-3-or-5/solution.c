// https://www.codewars.com/kata/514b92a657cdc65150000006

#include <stdbool.h>

bool thirfth(int n) {
  return n % 3 == 0 || n % 5 == 0;
}

int solution(int n) {
  int sum = 0;
  for (int i = 1; i < n; i++) {
    if (thirfth(i)) {
      sum += i;
    }
  }
  return sum;
}

