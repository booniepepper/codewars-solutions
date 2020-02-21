// https://www.codewars.com/kata/56efc695740d30f963000557/solutions/c/me

#include <string.h>
#include <stdlib.h>
#include <ctype.h>

// will mutate in place, as well as return
char *to_alternating_case(const char *in) {
    size_t length = strlen(in);
    char out[length];

    for (unsigned int i = 0; i < length; i ++) {
        int c = in[i];
        out[i] = islower(c) ? toupper(c)
               : isupper(c) ? tolower(c)
               : c;
    }
    out[length] = '\0';
    
    char* result = malloc(sizeof(out));
    strcpy(result, out);
    return result;
}
