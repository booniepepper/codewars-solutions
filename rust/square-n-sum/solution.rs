// https://www.codewars.com/kata/515e271a311df0350d00000f

fn square_sum(vec: Vec<i32>) -> i32 {
    return vec.iter().map(|n| n * n).sum();
}

