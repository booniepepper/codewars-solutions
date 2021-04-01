// https://www.codewars.com/kata/54ff3102c1bad923760001f3

#include <string>
#include <unordered_set>

using namespace std;

unordered_set<char> vowels = { 'a', 'e', 'i', 'o', 'u' };

bool is_vowel(const char c) {
  return vowels.count(c) != 0;
}

int getCount(const string& str) {
  int count = 0;
  for(char c : str) {
    if (is_vowel(c)) {
      count++;
    }
  }
  return count;
}

