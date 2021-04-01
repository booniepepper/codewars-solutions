// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
  var chars = text.split("");
  var counts = {};
  for (i in chars) {
    var key = (chars[i] === 0) ? 'zero' : chars[i].toLowerCase();
    counts[key] = counts[key] ? counts[key] + 1 : 1;
  }
  console.log(counts);
  var numDupes = 0;
  for (key in counts) {
    if (counts[key] > 1) {
      numDupes ++;
    }
  }
  return numDupes;
}

