// https://www.codewars.com/kata/556deca17c58da83c00002db

let rec tribonacci = (signature: (float, float, float), n: int): list(float) =>
  switch (n) {
  | 0 => []
  | _ => {
      let (a, b, c) = signature;
      let d = a +. b +. c;
      [a, ...tribonacci((b, c, d), n - 1)]
    }
  }

