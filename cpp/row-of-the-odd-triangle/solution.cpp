// https://www.codewars.com/kata/5d5a7525207a674b71aa25b5

#include <vector>

typedef unsigned long long ull;
typedef std::vector<ull> vull;

vull odd_row(ull row) {
  vull v(row);
  ull base = row * (row - 1);
  for (ull i = 0; i < row; i++) {
      v[i] = base + i * 2 + 1;
  }
  return v;
}

