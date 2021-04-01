// https://www.codewars.com/kata/5868b2de442e3fb2bb000119

function closest(numsStr) {
  if (numsStr.length < 2) {
    return [];
  }
  var nums = numsStr.split(' ').map((value, index) => {
    var weight = value.split('')
      .reduce((a, b) => {
        return parseInt(a) + parseInt(b); 
      });
    return {
      weight: parseInt(weight),
      index: index,
      value: parseInt(value)
    };
  });
  /*console.log('numsStr', numsStr);
  console.log('nums', nums);*/
  
  var min = {
    diff : Math.abs(nums[0].weight - nums[1].weight),
    first : nums[0],
    second : nums[1],
  }
  
  for (var i = 0; i < nums.length - 1; i++) {
    const a = nums[i];
    
    for (var j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      
      const diff = Math.abs(a.weight - b.weight);
      
      if (
          (diff < min.diff)
          || (
              (diff == min.diff)
              &&    (a.weight < min.first.weight
                  || a.weight < min.second.weight
                  || b.weight < min.first.weight
                  || b.weight < min.second.weight)
          )
      )
      {
        min.diff = diff;
        if (a.weight <= b.weight) {
          min.first = a;
          min.second = b;
        }
        else {
          min.first = b;
          min.second = a;
        }
      }
    }
  }
  
  return [
    [min.first.weight, min.first.index, min.first.value],
    [min.second.weight, min.second.index, min.second.value]
  ];
}

