! https://www.codewars.com/kata/556deca17c58da83c00002db

USING: arrays grouping kernel locals math sequences vectors ;
IN: kata

: vpush ( elt vec -- vec ) tuck push ;
: to-vec ( arr -- vec ) first3 3 <vector> vpush vpush vpush reverse ;
:: trib-till ( n vec a b c -- n vec b c d )
    n 3 <=
    [ n vec a b c ]
    [
        n 1 -
        a b c + +
        dup vec vpush swap
        b swap
        c swap
        trib-till
    ]
    if
;
: clean-trib ( n m vec a b c -- vec )
    3drop swap drop swap
    
    dup 0 <=
    [ 2drop 0 <vector> ]
    [ group first ]
    if
;

: tribonacci ( sig n -- xs )
    tuck swap to-vec
    dup first3
  
    trib-till
    clean-trib

    >array
;

