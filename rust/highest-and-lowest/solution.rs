// https://www.codewars.com/kata/554b4ac871d6813a03000035

fn high_and_low(numbers: &str) -> String {
  let numbers: Vec<i32> = numbers.split(' ')
    .map(|n| i32::from_str_radix(n, 10).unwrap())
    .collect();
  let max = numbers.iter().max().unwrap();
  let min = numbers.iter().min().unwrap();
  
  format!["{:?} {:?}", max, min]
}

