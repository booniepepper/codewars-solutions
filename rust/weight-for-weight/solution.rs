// https://www.codewars.com/kata/55c6126177c9441a570000cc

use std::ops::Add;

fn order_weight(s: &str) -> String {
    let mut weighted_strs = s
        .split(' ')
        // What have I done?
        .map(|s| (s.chars().map(|c| c as u32 - 48).fold(0_u32, u32::add), s))
        .collect::<Vec<(u32, &str)>>();

    weighted_strs.sort_by_key(|tup| (tup.0, tup.1));

    weighted_strs
        .iter()
        .map(|tup| tup.1.to_string())
        .collect::<Vec<String>>()
        .join(" ")
}

