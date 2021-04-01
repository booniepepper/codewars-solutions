# https://www.codewars.com/kata/5583d268479559400d000064

def binary_to_string(binary)
  binary.scan(/.{8}/)
    .map {|s| s.to_i 2 }
    .map(&:chr)
    .join
end

