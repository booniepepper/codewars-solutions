// https://www.codewars.com/kata/57f781872e3d8ca2a000007e

fn maps(values: &Vec<i32>) -> Vec<i32> {
    values.iter().map(|v| v * 2).collect()
}

