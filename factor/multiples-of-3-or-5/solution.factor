! https://www.codewars.com/kata/514b92a657cdc65150000006

USING: formatting kernel locals math ;
IN: solution

:: tri-or-quin? ( n -- b )
  n 3 mod zero?
  n 5 mod zero?
  or ;

:: solution ( n -- x )
  n 1 - :> n!
  0 :> sum!
  
  n 3 <
  [ 0 ]
  [
    [ n zero? ]
    [
      n tri-or-quin?
      [ sum n + sum! ]
      [ ]
      if
  
      n 1 - n!
    ]
    until
    sum
  ]
  if
;

