// https://www.codewars.com/kata/550f22f4d758534c1100025a

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
enum Direction {
    North,
    East,
    West,
    South,
}

use Direction::*;

fn dir_reduc(dirs: &[Direction]) -> Vec<Direction> {
    let mut dirs: Vec<Direction> = dirs.iter().map(Direction::clone).collect();
    let mut ptr: usize = 0;

    while dirs.len() > 0 && ptr < (dirs.len() - 1) {
        let here = dirs[ptr];
        let next = dirs[ptr + 1];

        ptr = match here == opposite(next) {
            true => {
                dirs.remove(ptr);
                dirs.remove(ptr);
                match ptr > 0 {
                    true => ptr - 1,
                    false => ptr,
                }
            }
            false => ptr + 1,
        }
    }

    dirs
}

fn opposite(dir: Direction) -> Direction {
    match dir {
        North => South,
        South => North,
        East => West,
        West => East,
    }
}

