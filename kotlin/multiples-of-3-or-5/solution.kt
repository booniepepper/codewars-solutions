// https://www.codewars.com/kata/514b92a657cdc65150000006

fun solution(upTo: Int): Int {
    var sum = 0
    for (n in 0..upTo-1) {
        if (n % 3 == 0 || n % 5 == 0) {
            sum += n
        }
    }
    return sum
}

