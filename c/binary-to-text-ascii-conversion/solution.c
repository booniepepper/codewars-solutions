// https://www.codewars.com/kata/5583d268479559400d000064

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char binary_to_char(const char *binary) {
    int c = 0;
    for (int i = 0; i < 8; i++) {
        if (binary[7 - i] == '0') {
            continue;
        }
        c += 1 << i;
    }
    return c;
}

char *substr(const char *str, int start, int end) {
    int len = end - start;
    char *sub = calloc(len, sizeof(char));
    for (int i = 0; i < len; i++) {
        sub[i] = str[i+start];
    }
    return sub;
}

char *binary_to_string(const char *binary) {
    int len = strlen(binary) / 8;
    
    char *ascii = calloc(len, sizeof(char));
    
    for (int i = 0; i < len; i++) {
        int start = i * 8;
        int end = (i + 1) * 8;
        char *binary_char = substr(binary, start, end);
        ascii[i] = binary_to_char(binary_char);
    }
    
    return ascii;
}

