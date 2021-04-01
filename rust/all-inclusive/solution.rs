// https://www.codewars.com/kata/5700c9acc1555755be00027e

use std::collections::HashSet;

fn contain_all_rots(a: &str, bs: Vec<&str>) -> bool {
    let bs: HashSet<String> = bs.iter().map(|b| String::from(*b)).collect();

    let rots: HashSet<String> = (0..a.len())
        .map(|i| String::new() + &a[i..] + &a[0..i])
        .collect();

    bs.is_superset(&rots)
}

