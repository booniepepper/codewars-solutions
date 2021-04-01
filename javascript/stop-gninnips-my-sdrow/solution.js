// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(words){
  return words.split(' ')
    .map((word) => {
      if (word.length > 4) {
        word = word.split('').reverse().join('');
      }
      return word;
    })
    .join(' ');
}

