// https://www.codewars.com/kata/58e24788e24ddee28e000053

fn simple_assembler(program: Vec<&str>) -> HashMap<String, i64> {
    let mut registers: HashMap<String, i64> = HashMap::new();
    
    let program = tokenize_program(program);
    
    let mut line_num = 0_i64;
    
    // My God, what have I done?
    'interpret: while line_num < program.len() as i64 {
        if let Some(line) = program.get(line_num as usize) {
            match line.len() {
                3 => if let Some(name) = line.get(0) {
                    let x = line.get(1).unwrap();
                    let y = line.get(2).unwrap();
                    let x_is_name = is_alpha(x);
                    let y_is_name = is_alpha(y);
                    match *name {
                        "mov" => {
                            if x_is_name && y_is_name {
                                let x = x.to_string();
                                let y = y.to_string();
                                if let Some(y) = registers.get(&y) {
                                    let y = y.clone();
                                    registers.insert(x, y);
                                } else {
                                    eprintln!("Couldn't find {} in registers {:?}", y, registers);
                                }
                            } else if x_is_name {
                                let x = x.to_string();
                                if let Ok(y) = y.parse::<i64>() {
                                    registers.insert(x, y);
                                } else {
                                    eprintln!("Couldn't parse {} as i64", x);
                                }
                            } else {
                                eprintln!("Expected register name between a-z but found x of {}", x);
                            }
                        }
                        "jnz" => {
                            let y = y.parse::<i64>().unwrap();
                            if x_is_name { 
                                let x = x.to_string();
                                if let Some(x) = registers.get(&x) {
                                    if *x != 0 {
                                        line_num += y;
                                        continue 'interpret;
                                    }
                                } else {
                                    eprintln!("Couldn't find {} in registers {:?}", x, registers);
                                }
                            } else {
                                if let Some(x) = x.parse::<i64>().ok() {
                                    if x != 0 {
                                        line_num += y;
                                        continue 'interpret;
                                    }
                                } else {
                                    eprintln!("Couldn't parse {} as i64", x);
                                }
                            };
                        },
                        _ => eprintln!("Unknown instruction")
                    }
                },
                2 => if let Some(name) = line.get(0) {
                    let x = line.get(1).unwrap().to_string();
                    match *name {
                        "inc" => {
                            if let Some(v) = registers.get(&x) {
                                let v = v + 1;
                                registers.insert(x, v);
                            } else {
                                eprintln!("Couldn't find {} in registers {:?}", x, registers);
                            }
                        },
                        "dec" => {
                            if let Some(v) = registers.get(&x) {
                                let v = v - 1;
                                registers.insert(x, v);
                            } else {
                                eprintln!("Couldn't find {} in registers {:?}", x, registers);
                            }
                        },
                        _ => eprintln!("Unknown instruction")
                    }
                },
                _ => eprintln!("Unknown line")
            }
        }
        line_num += 1;
    }
    
    registers
}

fn tokenize_program(program: Vec<&str>) -> Vec<Vec<&str>> {
    program.iter()
        .map(|line| line.split(' ').collect::<Vec<_>>())
        .collect::<Vec<_>>()
}

fn is_alpha(name: &str) -> bool {
    name.chars().all(is_alpha_char)
}

fn is_alpha_char(c: char) -> bool {
    ('a'..='z').contains(&c)
}

