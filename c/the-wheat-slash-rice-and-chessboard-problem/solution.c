// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7

typedef unsigned long long ull;

ull squares_needed(ull grains) {
    return grains == 0 ? 0 : 1 + squares_needed(grains / 2);
}

