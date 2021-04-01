// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25

fn vert_mirror(s: String) -> String {
    s.split("\n")
        .map(|s| s.chars().rev().collect::<String>())
        .collect::<Vec<String>>()
        .join("\n")
}

fn hor_mirror(s: String) -> String {
    s.split("\n")
        .collect::<Vec<_>>()
        .iter()
        .copied()
        .rev()
        .collect::<Vec<_>>()
        .join("\n")
}

fn oper(f: impl Fn(String) -> String, s: String) -> String {
   f(s)
}

