// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
  var words = s.split(' ');
  var min = words[0].length;
  for(i in words) {
    min = words[i].length < min? words[i].length : min;
  }
  return min;
}

