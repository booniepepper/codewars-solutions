// https://www.codewars.com/kata/5583d268479559400d000064

import java.lang.Integer

object Kata {
    def binaryToString(binary: String): String = {
        if (binary.length < 1) { "" }
        else {
            val end = if (binary.length < 8) binary.length else 8
            val letter = Integer.parseInt(binary substring(0, end), 2).toChar
            letter.toString + binaryToString(binary substring end)
        }
    }
}

