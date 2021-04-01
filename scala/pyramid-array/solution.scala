// https://www.codewars.com/kata/515f51d438015969f7000013

object Kata {
  def pyramid(n: Int): List[List[Int]] =
    List.range(0, n).map(i => List.fill(i + 1)(1))
}

