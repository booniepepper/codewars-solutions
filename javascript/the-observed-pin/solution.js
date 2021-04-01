// https://www.codewars.com/kata/5263c6999e0f40dee200059d

function getPINs(observedKeys) {
  function cleanup(k) {
    k = parseInt(k);
    return !(k < 1 || k === 10 || 11 < k);
  }
  
  function format(k) {
    k = parseInt(k);
    if (k === 11) { k = 0; }
    return k.toString();
  }

  const possibleKeys = observedKeys
    .split('')
    .map((k) => {
      k = parseInt(k);
      if (k === 0) { k = 11; }
      ks = [k-3, k, k+3];
      if (k % 3 !== 0) { ks.push(k+1); }
      if (k % 3 !== 1) { ks.push(k-1); }
      return ks.filter(cleanup).map(format);
    });
  //console.log("observedKeys", observedKeys);
  //console.log("possibleKeys", possibleKeys);
  
  var permutations = [ '' ];
  while (possibleKeys.length) {
    var p = possibleKeys.pop();
    permutations = permute(p, permutations);
  }
  return permutations;
}


/* 
 * for two arrays of strings,
 * return all permutations as array of strings
 */
function permute(as, bs) {
  var cs = [];
  for (var i in as) {
    var a = as[i].toString();
    for (var j in bs) {
      var b = bs[j].toString();
      cs.push(a + b);
    }
  }
  return cs;
}

