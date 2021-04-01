// https://www.codewars.com/kata/54d512e62a5e54c96200019e

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int maybe_insert_factor(char* acc, int rem, const int f) {
  #define append(s) strcat(acc, s)
  #define append_int(i) sprintf(acc + strlen(acc), "%d", i)
  int count = 0;
  while (rem % f == 0) {
    count++;
    rem /= f;
  }
  if (count > 0) {
    append("(");
    append_int(f);
    if (count > 1) {
      append("**");
      append_int(count);
    }
    append(")");
  }
  return rem;
} 

char* factors(const int n) {
  char *result = calloc(sizeof(char), 256);
  int rem = n;
  
  #define handle_factor(n) rem = maybe_insert_factor(result, rem, n)
  
  handle_factor(2);
  
  for (int i = 3; i <= rem; i+=2) {
    handle_factor(i);
  }

  return result;
}

