// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

#include <string.h>

char* remove_char(char* dst, const char* src)
{
    size_t dst_len = strlen(src) - 2;
    src++;

    for (int i = 0; i < dst_len; i++) {
        dst[i] = src[i];
    }

    dst[dst_len] = '\0';

    return dst;
}

