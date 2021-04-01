// https://www.codewars.com/kata/53368a47e38700bd8300030d

function list(names){
  if (names.length === 0) {
    return '';
  }
  else if (names.length ===1) {
    return names[0].name;
  }
  
  return names
    .map((o) => {return o.name})
    .join(', ')
    .replace(/,([^,]*)$/, ' &$1');
}

