// https://www.codewars.com/kata/54ff3102c1bad923760001f3

#include <stdbool.h>
#include <stddef.h>
#include <string.h>

char vowels[5] = {'a', 'e', 'i', 'o', 'u'};

bool is_vowel(char c) {
  for (int i = 0; i < 5; i++) if (vowels[i] == c) return true;
  return false;
}

int get_count(const char *s) {
  int count = 0, len = strlen(s);
  for (int i = 0; i < len; i++) if (is_vowel(s[i])) count++;
  return count;
}

