// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

#include <sys/types.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

ssize_t find_short(const char *str_in)
{
    ssize_t length_in = strlen(str_in);

    char str_consume[length_in];
    strncpy(str_consume, str_in, length_in + 1);
        
    char *token = strtok(str_consume, " ");

    ssize_t shortest = strlen(token);
    
    while (token != NULL) {
        ssize_t length = strlen(token);
        shortest = length < shortest ? length : shortest;
        
        token = strtok(NULL, " ");
    }
        
    return shortest;
}

