// https://www.codewars.com/kata/58649884a1659ed6cb000072

fn update_light(current: &str) -> String {
    let next = match current {
        "green" => "yellow",
        "yellow" => "red",
        "red" => "green",
        _ => panic!("unsupported color")
    };
    
    next.to_string()
}

