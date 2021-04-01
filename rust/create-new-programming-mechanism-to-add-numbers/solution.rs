// https://www.codewars.com/kata/5cb5d96bed8828002a24aedb

macro_rules! add {
    ( $( $x:expr ),* ) => {
        {
            let mut xs = Vec::new();
            $(
                xs.push($x);
            )*
            xs.iter().fold(0, |a, b| a + b)
        }
    };
}

