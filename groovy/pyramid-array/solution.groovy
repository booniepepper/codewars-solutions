// https://www.codewars.com/kata/515f51d438015969f7000013

class Kata {
    static Integer[][] pyramid(Integer n) {
        if (n <= 0) { return [] }
        
        def p = []
        
        for (i in 1..n) {
            p.add((0..<i).stream().map({_ -> 1}).collect())
        }
        
        p
    }
}

