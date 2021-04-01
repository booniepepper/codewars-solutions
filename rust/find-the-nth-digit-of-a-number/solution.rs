// https://www.codewars.com/kata/577b9960df78c19bca00007e

fn find_digit(num: i32, nth: i32) -> i32 {
  if nth < 1 { return -1; }

  let num = num.abs();
  let nth = (nth - 1) as usize; // for 0-indexing

  num.to_string()
    .chars()
    .rev()
    .nth(nth)
    .or(Some('0'))
    .unwrap() as i32 - 48 // ascii numerals begin with 0 at 48
}

