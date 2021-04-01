// https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1

function waveSort(arr){
  for (let i = 0; i < arr.length; i += 2) {
    for (let j of [i - 1, i + 1]) {
      if (j > 0 && j < arr.length && arr[i] < arr[j]) {
        arr.swap(i, j);
      }
    }
  }
}

Array.prototype.swap = function(a, b) {
  [this[a], this[b]] = [this[b], this[a]];
}

