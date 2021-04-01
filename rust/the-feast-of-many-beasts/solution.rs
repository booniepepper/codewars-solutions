// https://www.codewars.com/kata/5aa736a455f906981800360d

fn feast(beast: &str, dish: &str) -> bool {
    beast[0..1] == dish[0..1] && String::from(beast).pop() == String::from(dish).pop()
}

