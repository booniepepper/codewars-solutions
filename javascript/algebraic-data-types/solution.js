// https://www.codewars.com/kata/546d245dddbcbd291c00106e

function natToInt(nat) {
  //console.log(`natToInt(${nat})`);
  return nat === zero ? 0 : 1 + natToInt(nat());
}

function intToNat(int) {
  //console.log(`intToNat(${int})`);
  return int === 0 ? zero : succ(intToNat(int - 1));
}

function add(nat1, nat2) {
  //console.log(`add(${nat1}, ${nat2})`);
  if (nat1 === zero) {
    return nat2;
  }
  else if (nat2 === zero) {
    return nat1;
  }
  else {
    return succ(succ(add(nat1(), nat2())));
  }
}

function mul(nat1, nat2) {
  //console.log(`mul(${nat1}, ${nat2})`);
  if (nat1 === zero || nat2 === zero) {
    return zero;
  }
  else {
    return add(nat1, mul(nat1, nat2()));
  }
}

function compareTo (nat1, nat2) {
  //console.log(`compareTo(${nat1}, ${nat2})`);
  if (nat1 === zero && nat2 === zero) {
    return 0;
  }
  else if (nat1 === zero) {
    return -1;
  }
  else if (nat2 === zero) {
    return 1;
  }
  else {
    return compareTo(nat1(), nat2());
  }
}

function toString(nat) {
  //console.log(`toString(${nat})`);
  return nat === zero? "zero" : "succ(" + toString(nat()) + ")";
}

