// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c

use std::convert::TryInto;

fn zoom(n: i32) -> String {
    let n: usize = n.try_into().unwrap();
    zoom_squares(n).join("\n")
}

fn zoom_squares(n: usize) -> Vec<String> {
    let square = if (n + 1) / 2 % 2 == 1 { "■" } else { "□" };
    match n {
        0 => vec![],
        1 => vec![String::from(square)],
        _ => {
            let top = vec![String::from(square).repeat(n)];
            let core: Vec<String> = zoom_squares(n - 2).iter()
                .map(|row| String::from(square) + row + square)
                .collect();
            let bottom = top.clone();
            
            vec![top, core, bottom].concat()
        }
    }
}

