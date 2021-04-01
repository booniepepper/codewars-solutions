// https://www.codewars.com/kata/54ff3102c1bad923760001f3

package kata

func GetCount(str string) (count int) {
  count = 0
  
  for _, ch := range str {
    switch ch {
      case 'a', 'e', 'i', 'o', 'u':
        count++
    }
  }
  
  return count
}

