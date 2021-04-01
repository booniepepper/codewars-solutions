// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

pub fn remove_char(s: &str) -> String {
    let end = s.len() - 1;
    s[1..end].to_string()
}

