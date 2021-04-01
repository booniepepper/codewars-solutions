% https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

array_plus_array(As, Bs, Sum) :-
  sum_list(As, SumA),
  sum_list(Bs, SumB),
  Sum is SumA + SumB.

