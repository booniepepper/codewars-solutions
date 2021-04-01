// https://www.codewars.com/kata/5556282156230d0e5e000089

fn dna_to_rna(dna: &str) -> String {
    dna.chars().map(|c| {match c {'T' => 'U',_ => c}}).collect()
}

