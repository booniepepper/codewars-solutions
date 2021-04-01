// https://www.codewars.com/kata/5e23eadb0879110028b96424

package kata

func Square(x float64) float64 {
  return x * x
}

func Average(x, y float64) float64 {
  return (x + y) / 2.0
}

func Abs(x float64) float64 {
  if x >= 0 {
    return x
  }
  return -x
}

func Improve(guess, x float64) float64 {
  return Average(guess, x / guess)
}

func IsGoodEnough(guess, x float64) bool {
  return Abs(Square(guess) - x) < 0.001
}

func Try(guess, x float64) float64 {
  if IsGoodEnough(guess, x) {
    return guess
  }
  return Try(Improve(guess, x), x)
}

func Sqrt(x float64) float64 {
  return Try(1, x)
}

