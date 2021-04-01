// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

struct Deadfish {
    value: i32,
    outputs: Vec<i32>
}

impl Deadfish {
    fn new() -> Self {
        Deadfish { value: 0, outputs: vec![] }
    }
    fn apply(&mut self, command: char) {
        match command {
            'i' => self.value += 1,
            'd' => self.value -= 1,
            's' => self.value *= self.value,
            'o' => self.outputs.push(self.value),
            _ => ()
        }
    }
    fn parse(commands: &str) -> Vec<i32> {
        let mut deadfish = Deadfish::new();
        commands.chars().for_each(|c| deadfish.apply(c));
        deadfish.outputs
    }
}

fn parse(code: &str) -> Vec<i32> {
    Deadfish::parse(code)
}

