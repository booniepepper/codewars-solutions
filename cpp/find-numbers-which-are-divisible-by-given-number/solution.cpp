// https://www.codewars.com/kata/55edaba99da3a9c84000003b

#include <algorithm>

std::vector<int> divisible_by(std::vector<int> numbers, int divisor)
{
    std::vector<int> result;
    result.reserve(numbers.size());

    auto predicate = [=](int n) -> bool{
      return n % divisor == 0;
    };

    copy_if(
      numbers.begin(),
      numbers.end(),
      inserter(result, result.begin()),
      predicate
    );

    result.shrink_to_fit();
    return result;
}

