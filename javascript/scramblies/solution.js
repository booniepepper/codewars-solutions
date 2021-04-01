// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

const group = (coll, v) => { coll[v] = 1 + (coll[v] ? coll[v] : 0); return coll; };

const scramble = (str1, str2) => {
  const sup = str1.split('').reduce(group, {});
  const sub = str2.split('').reduce(group, {});
  
  for (const k in sub) {
    if (!sup[k] || sub[k] > sup[k]) {
      return false;
    }
  }
  
  return true;
}

