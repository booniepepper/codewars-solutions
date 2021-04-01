// https://www.codewars.com/kata/55908aad6620c066bc00002a

fn xo(string: &'static str) -> bool {
    let mut xs:u32 = 0;
    let mut os:u32 = 0;
    for c in string.chars() {
        match c {
            'x' | 'X' => xs += 1,
            'o' | 'O' => os += 1,
            _ => ()
        }
    }
    xs == os
}

