// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

fn min_value(mut digits: Vec<i32>) -> i32 {
    digits.sort();
    digits.dedup();
    digits.iter()
        .map(|d| d.to_string())
        .collect::<String>()
        .parse::<i32>()
        .unwrap()
}

