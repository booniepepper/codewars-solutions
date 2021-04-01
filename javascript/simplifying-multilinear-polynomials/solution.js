// https://www.codewars.com/kata/55f89832ac9a66518f000118

function simplify(poly){
  console.log(poly);
  var termMap = {};
  var terms = poly.split(/(?=[-+])/)
    .forEach((a) => {
      var c = parseInt(a);
      if (!c && a.match(/0/)) {
        // skip!
        return;
      }
      else if (a.match(/^[-+]?0x/)) {
        return;
      }
      else if (!c) {
        c = a[0] == '-' ? -1 : 1;
      }
      var variables = a.replace(/[^a-z]/g,'').split('').sort().join('');
      if (termMap[variables]) {
        termMap[variables] += c;
      }
      else {
        termMap[variables] = c;
      }
    });
  console.log('unreduced:', termMap);
  var reducedTerms = [];
  for (var term in termMap) {
    if (termMap[term]) {
      reducedTerms.push({c: termMap[term], v: term});
    }
  }
  console.log('reduced:', reducedTerms);
  reducedTerms = reducedTerms.sort((a, b) =>
    a.v.length != b.v.length ?
      a.v.length - b.v.length :
      (a.v < b.v ? -1 : 1)
  )
  .map((a) => {
    if (a.c === -1) return "-" + a.v;
    else if(a.c === 1) return "+" + a.v;
    else if(a.c > 0) return "+" + a.c + a.v;
     return a.c + a.v;
  })
  .join('');
  console.log('formatted:', reducedTerms);
  if (reducedTerms[0] === '+') { reducedTerms = reducedTerms.slice(1); }
  return reducedTerms;
}

