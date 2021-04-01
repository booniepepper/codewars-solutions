// https://www.codewars.com/kata/58708934a44cfccca60000c4

enum Sym {
    Forward,
    Left,
    Right,
    Digit(char),
    Bracket(char),
    Unknown(char),
}

impl Sym {
    pub fn from(c: char) -> Sym {
        match c {
            'F' => Sym::Forward,
            'L' => Sym::Left,
            'R' => Sym::Right,
            '0'...'9' => Sym::Digit(c),
            '(' | ')' => Sym::Bracket(c),
            _ => Sym::Unknown(c),
        }
    }

    pub fn to_char(&self) -> char {
        match *self {
            Sym::Forward => 'F',
            Sym::Left => 'L',
            Sym::Right => 'R',
            Sym::Digit(c) => c,
            Sym::Bracket(c) => c,
            Sym::Unknown(c) => c,
        }
    }

    pub fn is_similar(&self, other: &Sym) -> bool {
        match (self, other) {
            (&Sym::Forward, &Sym::Forward) => true,
            (&Sym::Left, &Sym::Left) => true,
            (&Sym::Right, &Sym::Right) => true,
            (&Sym::Digit(_), &Sym::Digit(_)) => true,
            (&Sym::Bracket(_), &Sym::Bracket(_)) => true,
            (&Sym::Unknown(_), &Sym::Bracket(_)) => true,
            (&Sym::Bracket(_), &Sym::Unknown(_)) => true,
            (&Sym::Unknown(_), &Sym::Unknown(_)) => true,
            _ => false,
        }
    }

    fn color(&self) -> Option<String> {
        match *self {
            Sym::Forward => Some("pink".to_string()),
            Sym::Left => Some("red".to_string()),
            Sym::Right => Some("green".to_string()),
            Sym::Digit(_) => Some("orange".to_string()),
            _ => None,
        }
    }
}

pub fn highlight(code: &str) -> String {
    let mut prev: Sym = Sym::Unknown('_');
    let mut result = String::new();

    let code: Vec<Sym> = code.chars().map(Sym::from).collect();

    for symbol in code {
        if !symbol.is_similar(&prev) {
            if !prev.is_similar(&Sym::Unknown('_')) {
                result.push_str("</span>");
            }
            result.push_str(open_span_for(&symbol).as_str());
        }
        result.push(symbol.to_char());
        prev = symbol;
    }

    match prev {
        Sym::Bracket(_) | Sym::Unknown(_) => (),
        _ => result.push_str("</span>"),
    }

    result
}

fn open_span_for(symbol: &Sym) -> String {
    match symbol.color() {
        Some(color) => format!("<span style=\"color: {}\">", color),
        None => "".to_string(),
    }
}

