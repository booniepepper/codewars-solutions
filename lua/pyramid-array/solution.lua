-- https://www.codewars.com/kata/515f51d438015969f7000013

return function(n)
  pyramid = {}
  
  for i = 1, n, 1
  do
    layer = {}
    for j = 1, i, 1
    do
      layer[j] = 1
    end
    pyramid[i] = layer
  end
  
  return pyramid
end

