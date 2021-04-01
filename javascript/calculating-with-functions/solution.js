// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const num = n => f => f ? f(n) : n;

const zero  = num(0),
      one   = num(1),
      two   = num(2),
      three = num(3),
      four  = num(4),
      five  = num(5),
      six   = num(6),
      seven = num(7),
      eight = num(8),
      nine  = num(9);

const plus      = a => b => a + b,
      minus     = a => b => b - a,
      times     = a => b => a * b,
      dividedBy = a => b => ~~(b / a);

