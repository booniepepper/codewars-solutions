// https://www.codewars.com/kata/515f51d438015969f7000013

List<List<int>> pyramid(int n) => 
  List.generate(n, (int i) =>  List.filled(i + 1, 1));

