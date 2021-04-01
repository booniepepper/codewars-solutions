// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  if (!numbers.length) {
    return [];
  }
  
  var minIndex = 0;
  for(var i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[minIndex]) {
      minIndex = i;
    }
  }
  
  var copy = [];
  var copyIndex = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (i === minIndex) {
      continue;
    }
    copy[copyIndex] = numbers[i];
    copyIndex++;
  }
  
  return copy;
}

