// https://www.codewars.com/kata/54147087d5c2ebe4f1000805

#include <stdbool.h>

void _if(bool value, void (*func1)(), void (*func2)())
{
    value ? func1() : func2();
}

