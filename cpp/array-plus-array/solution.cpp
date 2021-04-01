// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

#include <numeric>
#include <vector>

int sum(std::vector<int> a) {
  return accumulate(a.begin(), a.end(), 0);
}

int arrayPlusArray(std::vector<int> a, std::vector<int> b) {  
  return sum(a) + sum(b);
}

