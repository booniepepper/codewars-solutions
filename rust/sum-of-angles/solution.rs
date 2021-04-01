// https://www.codewars.com/kata/5a03b3f6a1c9040084001765

fn angle(n: u32) -> u32 {
  if n <= 2 {
      panic!("Cannot find the angles of a shape with less than 3 sides");
  }
  (n - 2) * 180
}

