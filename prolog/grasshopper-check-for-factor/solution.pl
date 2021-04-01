% https://www.codewars.com/kata/55cbc3586671f6aa070000fb

% predicate check_for_factor/2.
check_for_factor(Base, Factor) :- 0 is mod(Base, Factor).

