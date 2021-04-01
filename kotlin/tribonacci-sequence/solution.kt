// https://www.codewars.com/kata/556deca17c58da83c00002db

fun tribonacci(signature: DoubleArray, n: Int): DoubleArray {
    val result = mutableListOf<Double>()
    
    for (i in 0 until n) {
        result.add(when (i) {
            in 0..2 -> signature[i]
            else -> result.takeLast(3).sum()
        })
    }
    
    return result.toDoubleArray()
}

