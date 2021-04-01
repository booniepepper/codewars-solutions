// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

#include <stddef.h> // NULL
#include <stdio.h>

const size_t num_phrases = 6;
const char *phrases[num_phrases] = {
  "not at all",
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
};

const char* how_much_i_love_you(int nb_petals) {
  int i = nb_petals % num_phrases;
  return phrases[i];
}

