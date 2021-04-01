// https://www.codewars.com/kata/57e2dd0bec7d247e5600013a

function unflatten (flat) {
  let unflat = [];
  while(flat.length > 0) {
    let i = flat.shift();
    if (i < 3) {
      unflat.push(i);
    }
    else {
      let is = [i, ...flat.slice(0, i-1)];
      flat = flat.slice(i-1);
      unflat.push(is);
    }
  }
  return unflat;
}

