// https://www.codewars.com/kata/54ff3102c1bad923760001f3

use std::collections::HashSet;

fn get_count(string: &str) -> usize {
  let vowels: HashSet<char> = "aeiouAEIOU".chars().collect();
  
  string.chars().filter(|c| vowels.contains(c)).count()
}

