// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

fn reverse_words(s: &str) -> String {
    s.split(' ')
        .rev()
        .map(str::to_string)
        .collect::<Vec<String>>()
        .join(" ")
}

