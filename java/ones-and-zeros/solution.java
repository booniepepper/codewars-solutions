// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

import java.util.List;

public class BinaryArrayToNumber {

    public static int ConvertBinaryArrayToInt(List<Integer> binary) {
        int sum = 0;
        int pow = 0;
        for (int i = binary.size() - 1; i >= 0; i--) {
            sum += Math.pow(2, pow) * binary.get(i);
            pow++;
        }
        return sum;
    }
}

