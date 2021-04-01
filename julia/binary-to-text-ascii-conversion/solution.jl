# https://www.codewars.com/kata/5583d268479559400d000064

function binarytostring(binary)
  if length(binary) < 8
    ""
  else
    ascii = parse(Int, binary[1:8], base=2)
    Char(ascii) * binarytostring(binary[9:end])
  end
end

