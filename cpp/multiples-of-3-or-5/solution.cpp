// https://www.codewars.com/kata/514b92a657cdc65150000006

int solution(int until) 
{
    int sum = 0;
    for (int i = 1; i < until; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    return sum;
}

