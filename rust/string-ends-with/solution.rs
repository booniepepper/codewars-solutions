// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

fn solution(word: &str, ending: &str) -> bool {
    if ending.len() > word.len() { return false; }
    let start = word.len() - ending.len();
    &word[start..] == ending
}

