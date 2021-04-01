// https://www.codewars.com/kata/58e24788e24ddee28e000053

function simple_assembler(program) {
  const register = {};
  let i = 0;
  
  const isRegisterName = n => n.match(/^[a-zA-Z]$/);
  const resolveValue = n => isRegisterName(n) ? register[n] : Number(n);
  
  interpret: while (i < program.length) {
    let [instruction, x, y] = program[i].split(' ');
    switch (instruction) {
      case 'mov': register[x] = resolveValue(y);
                  break;
      case 'inc': register[x]++;
                  break;
      case 'dec': register[x]--;
                  break;
      case 'jnz': condition = resolveValue(x);
                  i += condition ? Number(y) : 1;
                  continue interpret;
    }
    i++;
  }
  return register;
}

