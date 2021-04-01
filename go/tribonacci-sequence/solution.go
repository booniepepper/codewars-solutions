// https://www.codewars.com/kata/556deca17c58da83c00002db

package kata

func Tribonacci(signature [3]float64, n int) []float64 {
    trib := make([]float64, n)
    
    for i := 0; i < n; i++ {
      if i < 3 {
        trib[i] = signature[i]
      } else {
        trib[i] = trib[i - 3] + trib[i - 2] + trib[i - 1]
      }
    }
    
    return trib
}

