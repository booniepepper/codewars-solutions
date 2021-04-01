// https://www.codewars.com/kata/540afbe2dc9f615d5e000425

extern crate itertools;
use itertools::sorted;

struct Sudoku{
    data: Vec<Vec<u32>>,
}

impl Sudoku{
    fn is_valid(&self) -> bool {
      self.is_valid_size()
          && self.has_valid_rows()
          && self.has_valid_cols()
          && self.has_valid_groups()
    }
    
    fn has_valid_rows(&self) -> bool {
        self.data.iter().all(|row| sorted(row).enumerate().all(|(a, b)| a as u32 + 1 == *b))
    }
    
    fn has_valid_cols(&self) -> bool {
        let len = self.data.len();
        let mut rotated: Vec<Vec<u32>> = Vec::with_capacity(len);
        for _ in 0..len {
            rotated.push(Vec::with_capacity(len));
        }
        for row in 0..len {
            for col in 0..len {
                rotated[row].push(self.data[len - col - 1][row]);
            }
        }
        Sudoku{ data: rotated }.has_valid_rows()
    }
    
    fn has_valid_groups(&self) -> bool {
        let len = self.data.len();
        let group_len = (len as f64).sqrt() as usize;
        let mut grouped: Vec<Vec<u32>> = Vec::with_capacity(len);
        for _ in 0..len {
            grouped.push(Vec::with_capacity(len));
        }
        // There's gotta be a way to group these more elegantly but I'm sleepy
        for row_group in 0..group_len {
            for row_pos in 0..group_len {
                for col_group in 0..group_len {
                    for col_pos in 0..group_len {
                        grouped[row_group + col_group * group_len].push(
                            self.data[row_pos + row_group * group_len][col_pos + col_group * group_len]
                        );
                    }
                }
            }
        }
        Sudoku{ data: grouped }.has_valid_rows()
    }
    
    fn is_valid_size(&self) -> bool {
        let len = self.data.len();
        self.data.iter().all(|row| row.len() == len)
    }
}

