// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

import java.util.Arrays;
public class Solution {

    public static int solveSuperMarketQueue(int[] customers, int n) {
        int[] queues = new int[n];
        int ptr;
        // assign initial customers
        for (ptr = 0; ptr < Math.min(customers.length, queues.length); ptr++) {
            queues[ptr] = customers[ptr];
        }
        
        // wait till all customers have been put in queue
        int elapsed = 0;
        while (ptr < customers.length) {
            // wait till the first customer at a stand is done
            int elapsing = minimum(queues);
            decreaseAll(queues, elapsing);
            elapsed += elapsing;
            
            // fill any empty spaces
            while (0 <= indexOfZero(queues) && ptr < customers.length) {
                queues[indexOfZero(queues)] = customers[ptr];
                ptr++;
            }
        }
        
        elapsed += maximum(queues);
        
        return elapsed;
    }
    
    private static int minimum(int[] nums) {
        int min = nums[0];
        for (int num : nums) {
            min = Math.min(min, num);
        }
        return min;
    }
    
    private static int maximum(int[] nums) {
        int max = nums[0];
        for (int num : nums) {
            max = Math.max(max, num);
        }
        return max;
    }
    
    private static int indexOfZero(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
              return i;
            }
        }
        return -1;
    }
    
    private static void decreaseAll(int[] nums, int decrement) {
        for (int i = 0; i < nums.length; i++) {
            nums[i] -= decrement;
        }
    }
    
}

