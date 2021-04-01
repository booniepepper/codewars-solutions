// https://www.codewars.com/kata/59f7a040a5b820c684000046

// TODO: Come back some day and clean this up. It was pretty fun!

const notImplemented = fnName => { throw new Error(`[${fnName}] Not implemented yet!`); };

// TODO: Man-up and don't use JavaScript Array in any solution? (Except toList?)
class List {
  constructor(array = [], generator = undefined) {
    List.assertIsArray(array);
    this.array = array;
    this.generator = generator;
  }

  static get empty() {
    return new List();
  }
  
  static get FIB() {
    notImplemented('List.FIB');
  }
  
  static get PI() {
    notImplemented('List.PI');
  }
  
  static get PRIME() {
    notImplemented('List.PRIME');
  }
  
  static assertIsList(that) {
    if (!that instanceof List) {
      throw `Expected an instance of List. Found: ${that}`;
    };
  }
  
  static assertIsArray(array) {
    if (!array instanceof Array) {
      throw `Expected an instance of Array. Found: ${array}`;
    };
  }
  
  static cycle(items) {
    items = items instanceof List ? items.array : items;
    const generator = function*() {
      while (true) {
        for (const item of items) {
          yield item;
        }
      }
    }
    return new List([], generator());
  }
  
  static fromList(array) {
    List.assertIsArray(array);
    return new List(array);
  }
  
  static iterate(fn, seed) {
    const generator = function*() {
      let gSeed = seed;
      while (true) {
        yield gSeed;
        gSeed = fn(gSeed);
      }
    }
    return new List([], generator());
  }
  
  static repeat(item) {
    return List.cycle([item]);
  }
  
  static replicate(times, item) {
    if (times == 0) { return List.empty; }
    //return List.repeat(item).take(times);
    return new List(new Array(times).fill(item));
  }
  
  all(fn) {
    return this.array.every(fn);
  }
  
  any(fn) {
    return this.array.some(fn);
  }
  
  append(that) {
    List.assertIsList(that);
    return new List([...this.array, ...that.array], this.generator || that.generator);
  }
  
  concat() {
    console.log(`concat() [[ ${JSON.stringify(this)} ]]`);
    if (this.nil()) { return this; }
    const next = this.head();
    if (next.isInfinite()) { return next; }
    if (this.isFinite()) { return next.append(this.tail().concat()); }
    return List.cycle(next.array); 
  }
  
  cons(value) {
    return new List([value, ...this.array]);
  }
  
  drop(amount) {
    if (amount <= 0 || this.nil()) { return this; }
    return this.slice(amount);
  }
  
  elem(item) {
    return this.array.includes(item);
  }
  
  elemIndex(item) {
    return this.array.indexOf(item);
  }
  
  filter(fn) {
    return new List(this.array.filter(fn));
  }
  
  find(fn) {
    if (this.nil()) { return undefined; }
    return this.array.find(fn);
  }
  
  findIndex(fn) {
    if (this.nil()) { return -1; }
    return this.array.findIndex(fn);
  }
  
  get(index) {
    if (index < this.array.length) {
      return this.array[index];
    }
    else if (this.isInfinite()) {
      this.populateUpTo(index + 1);
      return this.get(index);
    }
  }
  
  head() {
    return this.get(0);
  }
  
  init() {
    return this.take(this.length() - 1);
  }
  
  isFinite() {
    return !this.generator;
  }
  
  isInfinite() {
    return !!this.generator;
  }
  
  foldl(fn, into) {
    return this.array.reduce(fn, into);
  }
  
  foldr(fn, into) {
    return this.reverse().foldl((a, b) => fn(b, a), into);
  }
  
  last() {
    return this.reverse().head();
  }
  
  length() {
    return this.array.length;
  }
  
  map(fn) {
    console.log(`map(${fn}) [[ ${JSON.stringify(this)} ]]`);
    if (this.isFinite()) { return new List(this.array.map(fn)); }
    // FIXME: Children can advance parents' generator.
    const prevGenerator = this.generator;
    const nextGenerator = function*() {
      const prev = prevGenerator;
      // TODO: Handle generator results of "done"
      while (true) {
        yield fn(prev.next().value);
      }
    }
    return new List(this.array.map(fn), nextGenerator());
  }
  
  nil() {
    return this.isFinite() && this.length() == 0;
  }
  
  populateUpTo(length) {
    while(this.array.length < length) {
      this.array.push(this.generator.next().value);
    }
  }
  
  reverse() {
    if (this.nil()) { return this; }
    return this.tail().reverse().append(this.take(1));
  }
  
  scanl(fn, seed) {  
    const next = new List([seed]);
    if (this.nil()) { return next; }
    const nextSeed = fn(seed, this.head());
    return next.append(this.tail().scanl(fn, nextSeed));
  }
  
  scanr(fn, seed) {
    return this.reverse().scanl(fn, seed).reverse();
  }
  
  slice(start = 0, end = Infinity) {
    if (this.isInfinite() && this.array.length <= start) {
      this.populateUpTo(start + 1);
    }
    return new List(this.array.slice(start, end), this.generator);
  }
  
  tail() {
    return this.drop(1);
  }
  
  take(amount) {
    console.log(`take(${amount}) [[ ${JSON.stringify(this)}]]`);
    if (amount <= 0) { return List.empty; }
    if (this.isInfinite()) { this.populateUpTo(amount); }
    // Todo: move infinite check to populate method
    return new List(this.array.slice(0, amount));
  }
  
  the() {
    if (this.nil()) { return undefined; }
    if (this.length() == 1) { return this.get(0); }
    const head = this.head();
    if (this.all(item => item == head)) { return head; }
    return undefined;
  }

  toList() {
    return this.array;
  }
  
  zipWith(fn, that) {
    List.assertIsList(that);
    return new List(this.array.map((v, i) => fn(v, that.get(i))));
  }
}

