// https://www.codewars.com/kata/54dc6f5a224c26032800005c

let stockList = (stock, categories) =>{
  if (stock == '' || categories == '') {
    return '';
  }

  let results = new Map();
  
  categories.forEach(c => results.set(c, 0));
  
  stock.forEach(item => {
    let [id, count] = item.split(' ');
    let category = id.substr(0, 1);
    if (categories.includes(category)) {
      count = parseInt(count);
      let current = results.get(category);
      count += current;
      results.set(category, count);
    }
  });
  
  let resultStrings = [];
  results.forEach((v, k) => resultStrings.push(`(${k} : ${v})`));
  return resultStrings.join(' - ');
}

