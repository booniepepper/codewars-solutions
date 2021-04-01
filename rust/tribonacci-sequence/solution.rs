// https://www.codewars.com/kata/556deca17c58da83c00002db

fn tribonacci(signature: &[f64; 3], n: usize) -> Vec<f64> {
    let mut tribs: Vec<f64> = vec![0.; n];
    
    for i in 0..n {
        if i < 3 {
            tribs[i] = signature[i];
        }
        else {
            tribs[i] = tribs[i-3] + tribs[i-2] + tribs[i-1];
        }
    }
    
    tribs
}

