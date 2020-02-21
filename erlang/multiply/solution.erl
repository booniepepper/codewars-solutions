% https://www.codewars.com/kata/50654ddff44f800200000004

-module(bug_fix).
-export([multiply/2]).

-spec multiply(integer(), integer()) -> integer().
multiply(A, B) -> A*B.

