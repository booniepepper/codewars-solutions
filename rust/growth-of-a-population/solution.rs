// https://www.codewars.com/kata/563b662a59afc2b5120000c6

fn nb_year(pop: i32, inc_pct: f64, inc_num: i32, target: i32)-> i32 {
  let mut year = 0;
  
  let mut pop = pop;
  let inc_pct = (100.0 + inc_pct) / 100.0;
  
  while pop < target {
      pop = (pop as f64 * inc_pct) as i32 + inc_num;
      year += 1;
  }
  
  year
}

