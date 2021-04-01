// https://www.codewars.com/kata/56dbe7f113c2f63570000b86

fn rot(s: &str) -> String {
    s.to_string().chars().rev().collect()
}

fn selfie_and_rot(s: &str) -> String {
    let append_dots = |s: &str| s.to_owned() + &".".repeat(s.len());
    let prepend_dots = |s: &str| ".".repeat(s.len()) + s;
    split_join(append_dots, s.to_string())
        + "\n"
        + &split_join(prepend_dots, rot(s))
}

fn oper(f: fn(&str) -> String, s: &str) -> String {
    f(s)
}

fn split_join(f: fn(&str) -> String, s: String) -> String {
    s.split('\n')
        .map(f)
        .collect::<Vec<String>>()
        .join("\n")
}

