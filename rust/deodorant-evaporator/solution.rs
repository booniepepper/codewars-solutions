// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f

fn evaporator(_: f64, evaporate: i32, threshold: i32) -> i32 {
    let decrement = evaporate as f64 / 100_f64;
    let threshold = threshold as f64;
    let mut remaining = 100_f64;
    for n in 0.. {
        if remaining < threshold { return n; }
        remaining -= remaining * decrement;
    }
    
    panic!("Reached outside an infinite loop.");
}

