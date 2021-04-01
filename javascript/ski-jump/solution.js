// https://www.codewars.com/kata/57ed7214f670e99f7a000c73

const skiJump = h => (
  length = (h.length ** 2 * 1.35).toFixed(2),
  `${length} metres: ` +
    (
      length <= 10 ? "He's crap!"
      : length <= 25 ? "He's ok!"
      : length <= 50 ? "He's flying!"
      : "Gold!!"
    )
);

