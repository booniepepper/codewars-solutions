// https://www.codewars.com/kata/54b724efac3d5402db00065e

mod preloaded;
use preloaded::MORSE_CODE;

fn decode_morse(encoded: &str) -> String {
    let decoded: String = encoded.replace("  ", " ")
        .split(" ")
        .map(|letter|
            match MORSE_CODE.get(letter) {
                Some(alpha) => alpha.clone(),
                None => String::from(" ")
            }
        )
        .collect();
        
    decoded.trim().to_string()
}

