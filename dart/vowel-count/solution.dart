// https://www.codewars.com/kata/54ff3102c1bad923760001f3

import "dart:core";

Set vowels = Set.from("aeiou".runes);

int getCount(String str){
  return str.runes.where(vowels.contains).length;
}

