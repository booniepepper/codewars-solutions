// https://www.codewars.com/kata/5aba780a6a176b029800041c

#include <math.h>

int maxMultiple(int divisor, int bound) 
{
    return bound - bound % divisor;
}

