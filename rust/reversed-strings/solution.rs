// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

pub fn remove_char(s: &str) -> String {
    String::from(&s[1..s.len()-1])
}

