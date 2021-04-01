// https://www.codewars.com/kata/556deca17c58da83c00002db

class Kata {
  static List<Integer> tribonacci(List<Integer> signature, Integer n) {
    if (n < signature.size()) {
      return signature.subList(0, n)
    }

    List<Integer> result = signature;
    while (result.size() < n) {
      int i = result.size()
      result[i] = result[i-3] + result[i-2] + result[i-1]
    }

    result
  }
}

