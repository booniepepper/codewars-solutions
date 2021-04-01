// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111

const colors = {
  'RR':'R', 'GB':'R', 'BG':'R',
  'GG':'G', 'RB':'G', 'BR':'G',
  'BB':'B', 'RG':'B', 'GR':'B'
};

function triangle(row) {
  while(row.length > 1) {
    //console.log(row);
    let next = '';
    for(let i = 0; i < row.length-1; i++) {
      next += colors[row.slice(i,i+2)];
    }
    row = next;
  }
  //console.log(row);
  return row;
}

