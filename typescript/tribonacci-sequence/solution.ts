// https://www.codewars.com/kata/556deca17c58da83c00002db

export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  if (n <= 0) {
    return [];
  } else {
    return [a].concat(tribonacci([b, c, a+b+c], n-1));
  }
}

