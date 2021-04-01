// https://www.codewars.com/kata/514b92a657cdc65150000006

package kata

func Multiple3And5(number int) (sum int) {
  for n := 0; n < number; n++ {
    if n % 3 == 0 || n % 5 == 0 {
      sum += n;
    }
  }
  return sum;
}

