// https://www.codewars.com/kata/5616868c81a0f281e500005c

use std::cmp::Ordering;

fn rank(names: &str, weights: Vec<i32>, nth: usize) -> &str {
    println!("rank(names={}, weights={:?}, nth={}", names, weights, nth);
    if names.len() == 0 {
        return "No participants";
    }
    let names: Vec<&str> = names.split(',').collect();
    if nth > names.len() {
        return "Not enough participants";
    }

    let mut name_weights: Vec<(&str, i32)> = names
        .iter()
        .zip(weights.iter())
        .map(|(name, weight)| (*name, rank_of_name(name) * weight))
        .collect();

    name_weights.sort_by(
        |(name_a, rank_a), (name_b, rank_b)| match rank_b.cmp(&rank_a) {
            Ordering::Equal => name_a.cmp(&name_b),
            Ordering::Less => Ordering::Less,
            Ordering::Greater => Ordering::Greater,
        },
    );
    println!("{:?}", name_weights);

    let nth = nth - 1; // 0 index it.
    name_weights[nth].0
}

fn rank_of_name(name: &str) -> i32 {
    let len: i32 = name.len() as i32;
    let char_ranks: i32 = name
        .to_ascii_uppercase()
        .chars()
        .map(|char| char as i32 - 64)
        .sum();

    len + char_ranks
}

