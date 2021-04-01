// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

public class Scramblies {
    private static final int CHAR_OFFSET = 97;
    private static final int ALPHA_LENGTH = 26;

    public static boolean scramble(String scrambled, String target) {
        final int[] scrambledCounts = new int[ALPHA_LENGTH];
        final int[] targetCounts = new int[ALPHA_LENGTH];

        scrambled.chars().forEach(c -> scrambledCounts[c - CHAR_OFFSET] += 1);
        target.chars().forEach(c -> targetCounts[c - CHAR_OFFSET] += 1);
        
        for (int i = 0; i < ALPHA_LENGTH; i++) {
            if (scrambledCounts[i] < targetCounts[i]) {
                return false;
            }
        }

        return true;
    }
}

