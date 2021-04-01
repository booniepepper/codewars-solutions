// https://www.codewars.com/kata/5626b561280a42ecc50000d1

import java.util.List;
import java.util.ArrayList;

class SumDigPower {
    
    public static List<Long> sumDigPow(long a, long b) {
        List<Long> valids = new ArrayList<>();
        for (long i = a; i <= b; i++) {
            if (i == sumDigits(i)) {
                valids.add(i);
            }
        }
        return valids;
    }
    
    private static long sumDigits(long a) {
        List<Short> digits = new ArrayList<>();
        while (a > 0) {
            digits.add((short)(a % 10L));
            a /= 10;
        }
        long sum = 0;
        long pow = 1;
        for (int i = digits.size() - 1; i >= 0; i--) {
            sum += Math.pow(digits.get(i), pow);
            pow++;
        }
        return sum;
    }
}

