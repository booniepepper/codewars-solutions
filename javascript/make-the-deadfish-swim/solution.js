// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

class Deadfish {
    constructor() {
        this.value = 0;
        this.outputs = [];
    }
    
    get i() { this.value++; }
    get d() { this.value--; }
    get s() { this.value *= this.value; }
    get o() { this.outputs.push(this.value); }
    
    static parse(commands) {
        return commands.split('')
          .reduce((df, command) => (df[command], df), new Deadfish())
          .outputs;
    }
}

const parse = Deadfish.parse;

