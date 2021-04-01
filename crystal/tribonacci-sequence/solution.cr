# https://www.codewars.com/kata/556deca17c58da83c00002db

def tribonacci(sig : Array(Number), n : Number)
    if n <= 0
        [] of Array(Int32)
    elsif n <= 3
        sig[0...n]
    elsif
        trib = sig
        size = trib.size()
        while size < n
            a = trib[size - 1]
            b = trib[size - 2]
            c = trib[size - 3]
            trib.push(a + b + c)
            size = trib.size()
        end
        trib
    end
end

