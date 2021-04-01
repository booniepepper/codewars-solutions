# https://www.codewars.com/kata/5d5a7525207a674b71aa25b5

def odd_row row
  return (1..row).map {|n| row * (row - 1) + n * 2 - 1}
end

