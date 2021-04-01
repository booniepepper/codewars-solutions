// https://www.codewars.com/kata/556deca17c58da83c00002db

object Tribonacci {
  def tribonacci[N: Numeric](signature: List[N], n: Int): List[N] = n match {
    case 0 => List()
    case _ => signature match {
      case List(a, b, c, _*) => {
        val d = List(a, b, c).sum;
        List(a) ::: tribonacci(List(b, c, d), n - 1)
      }
    }
  }
}

