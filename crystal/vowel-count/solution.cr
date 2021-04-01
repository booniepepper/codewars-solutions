# https://www.codewars.com/kata/54ff3102c1bad923760001f3

def get_vowel_count(str)
  str.each_char.select{|c| "aeiou".includes? c}.size
end

