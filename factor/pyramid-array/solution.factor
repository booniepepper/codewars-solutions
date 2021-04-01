! https://www.codewars.com/kata/515f51d438015969f7000013

USING: kernel math math.ranges arrays sequences ;

IN: pyramid

: pyramid ( n -- x )
  <iota>
  [ 1 + ] map
  [ 1 <array> ] map ;

