// https://www.codewars.com/kata/54d81488b981293527000c8f

use std::collections::HashSet;

fn sum_pairs(nums: &[i8], target: i8) -> Option<(i8, i8)> {
    let mut seen: HashSet<i8> = HashSet::new();
    let mut result: Option<(i8, i8)> = None;

    for n in nums {
        let cmp = target - n;

        if seen.contains(n) && n != &cmp { continue; }

        if seen.contains(&cmp) {
            result = Some((cmp, n.clone()));
            break;
        }

        seen.insert(n.clone());
    }
    
    result
}

