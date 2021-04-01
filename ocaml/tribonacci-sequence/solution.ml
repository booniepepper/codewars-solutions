(* https://www.codewars.com/kata/556deca17c58da83c00002db *)

let rec tribonacci signature n =
  match signature with
  | a::b::c::_ ->
    match n with
      | n when n > 0 ->
        a::tribonacci [b;c;a + b + c] (n - 1)
      | _ -> []
  | _ -> []


