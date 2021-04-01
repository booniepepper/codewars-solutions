// https://www.codewars.com/kata/57f759bb664021a30300007d

let switcheroo = s => s.split('').map(c => c == 'a' ? 'b' : c =='b' ? 'a' : c).join('');

