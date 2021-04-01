// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

#include <string.h>

int* parse(char* program)
{
  int len = strlen(program);
  int value = 0;
  int outputs[len];
  int out_i = 0;
  
  for (int i = 0; i < len; i++) {
    char command = program[i];
    switch (command) {
      case 'i': value++; break;
      case 'd': value--; break;
      case 's': value *= value; break;
      case 'o':
          outputs[out_i] = value;
          out_i++;
    }
  }
  
  int *out = calloc(out_i, sizeof(int));
  for (int i = 0; i < out_i; i++) {
      out[i] = outputs[i];
  }
  
  return out;
}

