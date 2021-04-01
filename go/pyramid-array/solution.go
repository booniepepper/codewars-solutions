// https://www.codewars.com/kata/515f51d438015969f7000013

package kata

func Pyramid(n int) [][]int {
    pyramid := make([][]int, n)
    
    for i := range pyramid {
      layer := make([]int, i + 1)
      for j := range layer {
        layer[j] = 1
      }
      pyramid[i] = layer
    }
    
    return pyramid
}

