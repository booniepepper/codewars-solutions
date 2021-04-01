// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

fn longest(a: &str, b: &str) -> String {
 let combined = String::from(a) + b;
 
 let mut combined: Vec<char> = combined.chars().collect();
 combined.sort();
 combined.dedup();
 
 combined.iter().collect()
}

