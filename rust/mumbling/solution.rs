// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

fn accum(s:&str)->String {
    s.chars()
        .enumerate()
        .map(|(i, c)| (i, c.to_string()))
        .map(|(i, c)| c.to_ascii_uppercase() + c.to_ascii_lowercase().repeat(i).as_str())
        .collect::<Vec<String>>()
        .join("-")
}

