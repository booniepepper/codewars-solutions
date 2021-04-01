// https://www.codewars.com/kata/51e056fe544cf36c410000fb

const intoWordMap = (map, entry) => (
  count = map.get(entry) || 0,
  map.set(entry, count + 1),
  map
);

// Note: would be more space efficient to use a Trie instead of Map
const toWordMap = text => text.split(' ')
  .map(word => word.toLowerCase().replace(/[^a-z']/g, ''))
  .filter(word => word.length && !word.match(/^'+$/))
  .reduce(intoWordMap, new Map())

const topThreeWords = text => [...toWordMap(text).entries()]
  .sort((a, b) => b[1] - a[1])
  // surprised that tests don't consider situations
  // with many words of equal top rank
  .slice(0, 3)
  .map(entry => entry[0]);

