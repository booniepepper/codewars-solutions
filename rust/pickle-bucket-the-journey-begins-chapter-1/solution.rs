// https://www.codewars.com/kata/5ce5df8dcb83dc0020d2bd8f

fn get_averages (pickle_counts: Vec<u32>) -> Vec<f64> {
  if pickle_counts.is_empty() {
      return vec![0.0, 0.0, 0.0, 0.0];
  }
  
  let mut pickle_counts = pickle_counts;
  
  while pickle_counts.len() % 4 != 0 {
      pickle_counts.push(0);
  }
  
  let group_count = (pickle_counts.len() as f64 / 4.0).ceil();
  
  pickle_counts.chunks(4)
    .fold(vec![0,0,0,0], |a, b| a.iter()
        .zip(b)
        .map(|(c, d)| c + d)
        .collect()
    )
    .iter()
    .map(|count| count.clone() as f64 / group_count) 
    .collect()
}

