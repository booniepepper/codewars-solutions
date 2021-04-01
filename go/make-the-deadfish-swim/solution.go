// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

package kata

func Parse(commands string) []int{  
  var out []int = make([]int, 0)
  var val int
  
  for _, command := range commands {
    switch command {
      case 'i': val++
      case 'd': val--
      case 's': val *= val
      case 'o': out = append(out, val)
    }
  }
  
  return out
}

