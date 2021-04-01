// https://www.codewars.com/kata/515f51d438015969f7000013

function pyramid($n) {
  $p = [];
  
  for ($i = 0; $i < $n; $i++) {
    $layer = [];
    for ($j = 0; $j <= $i; $j++) {
      $layer[$j] = 1;
    }
    $p[$i] = $layer;
  }
  
  return $p;
}

