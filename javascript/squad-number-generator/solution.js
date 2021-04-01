// https://www.codewars.com/kata/5d62961d18198b000e2f22b3

function generateNumber(squad, n){
  squad = new Set(squad);

  if (!squad.has(n)) {
    return n;
  }

  for (let i = 1; i <= 9; i++) {
    let j = n - i;
    let nn = i * 10 + j;

    if (0 < j && j < 10 && !squad.has(nn)) {
      return nn;
    }

  }
  return null;
}

