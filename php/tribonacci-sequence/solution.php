// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci($signature, $n) {
  $res = [];
  for ($i = 0; $i <$n;$i++) {
    if($i < 3) {
      $res[$i] = $signature[$i];
    } else {
      $res[$i] = $res[$i-3] + $res[$i-2] + $res[$i-1];
    }
  }
  return $res;
}

