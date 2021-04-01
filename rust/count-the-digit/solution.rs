// https://www.codewars.com/kata/566fc12495810954b1000030

fn nb_dig(limit: i32, digit: i32) -> i32 {
    let mut occurrences = 0;
    let digit = digit.to_string().chars().next().unwrap();
    
    for i in 0..=limit {
      let i = i * i;
      i.to_string().chars()
        .for_each(|d| if d == digit {
            occurrences += 1;
        });
    }
    
    occurrences
}

