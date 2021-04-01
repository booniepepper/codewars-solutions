// https://www.codewars.com/kata/56baeae7022c16dd7400086e

use regex::Regex;

fn phone(directory: &str, phone: &str) -> String {
    let entries = directory.split('\n')
        .filter(|line| line.contains(("+".to_owned() + phone).as_str()))
        .map(|entry| normalized_phone(entry, phone))
        .collect::<Vec<_>>();
    
    if entries.len() > 1 {
        return format!("Error => Too many people: {}", phone);
    }
    if entries.len() == 0 {
        return format!("Error => Not found: {}", phone);
    }
    
    entries.get(0).unwrap().to_string()
}

fn normalized_phone(entry: &str, phone: &str) -> String {
    let name_start = entry.find('<').unwrap()+1;
    let name_end = entry.find('>').unwrap();
    
    let name = &entry[name_start..name_end];

    let entry = entry.replace(phone, "").replace(name, "");
    let entry = Regex::new(r" ?[^a-zA-Z0-9\.-] ?").unwrap().replace_all(&entry, " ").into_owned();
    
    let address = entry.trim().replace("  ", " ");
    
    format!("Phone => {}, Name => {}, Address => {}", phone, name, address)
}

