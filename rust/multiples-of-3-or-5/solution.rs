// https://www.codewars.com/kata/514b92a657cdc65150000006

const divisors: [i32; 2] = [3, 5];

fn solution(limit: i32) -> i32 {
  let mut sum = 0;

  for i in 3..limit {
    if divisors.iter().any(|div| i % div == 0) {
      sum += i;
    }
  }

  sum
}

