# https://www.codewars.com/kata/514b92a657cdc65150000006

module Solution

  triOrQuin(n) = n % 3 == 0 || n % 5 == 0

  function sumofmultiples(n)
    sum(filter(triOrQuin, 1:n-1))
  end
  
end

