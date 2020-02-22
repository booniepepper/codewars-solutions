// https://www.codewars.com/kata/58e24788e24ddee28e000053

pub fn simple_assembler(program: Vec<&str>) -> Registers {
    let mut registers = Registers::new();
    
    let program = tokenize_program(program);
    
    let mut line_num: LineNum = 0;
    
    while line_num < program.len() as LineNum {
        let line = program.get(line_num as usize).unwrap();
        let line_inc = Instruction::from(line, &mut registers).execute();
        line_num += line_inc;
    }
    
    registers
}

type Registers = HashMap<String, DataNum>;
type Program <'a> = Vec<Instruction<'a>>;
type DataNum = i64;
type LineNum = i64;

#[derive(Debug)]
enum Instruction <'a> {
    Move { registers: &'a mut Registers, to: String, data: Data },
    JumpIfNotZero { registers: &'a Registers, data: Data, steps_away: LineNum },
    Increment { registers: &'a mut Registers, data: Data },
    Decrement { registers: &'a mut Registers, data: Data },
    Unknown
}

impl Instruction <'_> {
    fn from <'a> (code: &'a Vec<&str>, registers: &'a mut Registers) -> Instruction<'a> {
        let name = code.first().unwrap();
        match *name {
            "mov" => {
                let to = code.get(1).unwrap().to_string();
                let data = Data::from(*code.get(2).unwrap());
                Instruction::Move { registers, data, to }
            },
            "inc" => {
                let data = Data::from(*code.get(1).unwrap());
                Instruction::Increment { registers, data }
            },
            "dec" => {
                let data = Data::from(*code.get(1).unwrap());
                Instruction::Decrement { registers, data }
            },
            "jnz" => {
                let data = Data::from(*code.get(1).unwrap());
                let steps_away = code.get(2).unwrap();
                let steps_away = steps_away.parse::<LineNum>().unwrap();
                Instruction::JumpIfNotZero { registers, data, steps_away }
            },
            _ => Instruction::Unknown
        }
    }
    
    fn execute(self) -> LineNum {
        let mut next_line = 1;
        match self {
            Instruction::Move { registers, data, to } => 
                if let Some(value) = data.get_value(&registers) {
                    registers.insert(to.to_string(), value);
                }
            ,
            Instruction::Increment { registers, data } => {
                let key = data.get_key().unwrap();
                let value = 1 + data.get_value(&registers).unwrap();
                registers.insert(key, value);
            },
            Instruction::Decrement { registers, data } => {
                let key = data.get_key().unwrap();
                let value = -1 + data.get_value(&registers).unwrap();
                registers.insert(key, value);
            },
            Instruction::JumpIfNotZero { registers, data, steps_away } => 
                if data.get_value(&registers) != Some(0) {
                    next_line = steps_away;
                },
            _ => ()
        }
        next_line
    }
}

#[derive(Debug)]
enum Data {
    RegisterKey { key: String },
    Constant { value: DataNum },
    Unknown
}

impl Data {
    fn get_value(&self, registers: &Registers) -> Option<DataNum> {
        match self {
            Data::RegisterKey { key } => registers.get(key).copied(),
            Data::Constant { value } => Some(*value),
            Data::Unknown => None
        }
    }
    
    fn get_key(&self) -> Option<String> {
        match self {
            Data::RegisterKey { key } => Some(key.to_string()),
            _ => None
        }
    }
}

impl From<&str> for Data {
    fn from(s: &str) -> Self {
        if is_alpha(s) {
            return Data::RegisterKey { key: s.to_string() }
        }
        match s.parse::<DataNum>().ok() {
            Some(value) => Data::Constant { value },
            None => Data::Unknown
        }
    }
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

