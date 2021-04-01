// https://www.codewars.com/kata/56efab15740d301ab40002ee

fn som(a: i64, b: i64) -> i64 {
  a + b
}

fn maxi(a: i64, b: i64) -> i64 {
  if a > b { a } else { b }
}

fn mini(a: i64, b: i64) -> i64 {
  if a < b { a } else { b }
}

fn gcdi(a: i64, b: i64) -> i64 {
  let a = a.abs();
  let b = b.abs();
  if b == 0 {
    a
  }
  else {
    gcdi(b, a % b) 
  }
}
fn lcmu(a: i64, b: i64) -> i64 {
  let a = a.abs();
  let b = b.abs();
  a * b / gcdi(a, b)
}

fn oper_array(f: impl Fn(i64, i64) -> i64, arr: &[i64], init: i64) -> Vec<i64> {
  arr.iter()
    .scan(init, |prev, n| {
      *prev = f(*prev, *n);
      Some(*prev)
    })
    .collect()
}

