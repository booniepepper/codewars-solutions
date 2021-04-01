// https://www.codewars.com/kata/568d0dd208ee69389d000016

let discount = d => d >= 7 ? 50
                  : d >= 3 ? 20
                  :           0;

let rentalCarCost = d => d * 40 - discount(d);

