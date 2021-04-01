// https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
    var squares = "";
    for(var i = 0; i <= n; i++) {
      squares += i*i;
    }
    return squares.match(new RegExp(d, 'g')).length;
}

