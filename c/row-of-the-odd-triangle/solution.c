// https://www.codewars.com/kata/5d5a7525207a674b71aa25b5

#include <stdlib.h>

typedef unsigned long long ull;

ull *oddrow(ull row)
{
    ull *values = calloc(row, sizeof(ull));
    ull base = row * (row - 1);
    for (ull i = 0; i < row; i++) {
        values[i] = base + i * 2 + 1;
    }
    return values;
}

