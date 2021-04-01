// https://www.codewars.com/kata/58880c6e79a0a3e459000004

const houseNumbersSum = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length && arr[i] != 0; i++) {
    sum += arr[i];
  }
  return sum;
}

