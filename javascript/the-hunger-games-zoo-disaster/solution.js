// https://www.codewars.com/kata/5902bc7aba39542b4a00003d

var preyOf = {
  'antelope' : ['grass'],
  'big-fish' : ['little-fish'],
  'bug' : ['leaves'],
  'bear' : ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
  'chicken' : ['bug'],
  'cow' : ['grass'],
  'fox' : ['chicken', 'sheep'],
  'giraffe' : ['leaves'],
  'lion' : ['antelope', 'cow'],
  'panda' : ['leaves'],
  'sheep' : ['grass']
};

var whoEatsWho = function(zooIn) {
  var survivors = zooIn.split(',');
  var messages = [];
  
  var ptr = 0;
  
  while (ptr < survivors.length) {
    const survivor = survivors[ptr];
    const myPrey = preyOf[survivor];
    console.log('examining', {
       survivors: survivors,
       survivor: survivor,
       myPrey: myPrey
    });
    
    if (!myPrey) {
      ptr++;
      continue;
    }
    else if (ptr > 0 && myPrey.includes(survivors[ptr - 1])) {
      const prey = survivors[ptr - 1];
      survivors = survivors.slice(0, ptr - 1).concat(survivors.slice(ptr));
      ptr -= 2;
      messages.push(`${survivor} eats ${prey}`);
      continue;
    }
    else if(ptr < survivors.length - 1 && myPrey.includes(survivors[ptr + 1])) {
      const prey = survivors[ptr + 1];
      survivors = survivors.slice(0, ptr + 1).concat(survivors.slice(ptr+2));
      messages.push(`${survivor} eats ${prey}`);
      continue;
    }
    else {
      ptr++;
    }
  }
  
  const zooOut = survivors.join(',');
  return [zooIn, ...messages, zooOut]
}

