// https://www.codewars.com/kata/5901f361927288d961000013

let product = ns => ns == null ? null
                  : ns.length == 0 ? null
                  : ns.reduce((a, b) => a * b, 1);

