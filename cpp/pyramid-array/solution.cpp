// https://www.codewars.com/kata/515f51d438015969f7000013

#include <cstdlib>
#include <vector>

using vi = std::vector<int>;
using vvi = std::vector<vi>;

vvi pyramid(std::size_t n) {
  vvi result;
  result.reserve(n);
  for (auto i = 1; i <= n; i++) {
    result.push_back(vi(i, 1));
  }
  return result;
}

