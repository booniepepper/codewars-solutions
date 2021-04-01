// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

extern crate itertools;
use itertools::Itertools;

fn descending_order(x: u64) -> u64 {
    x.to_string()
        .chars()
        .sorted()
        .rev()
        .collect::<String>()
        .parse::<u64>()
        .unwrap()
}

