// https://www.codewars.com/kata/552ec968fcd1975e8100005a

var transforms = [
  [/too?/ig, '2'],
  [/fore?/ig, '4'],
  [/oo/ig, '00'],
  [/(b)e/ig, '$1'],
  [/a(r)e/ig, '$1'],
  [/yo(u)/ig, '$1'],
  [/(p)(l)ease/ig, '$1$2z'],
  [/(p)eo(pl)e/ig, '$1$2'],
  [/(r)ea(l)l(y)/ig, '$1$2$3'],
  [/(ha)ve/ig, '$1z'],
  [/k(no)w/ig, '$1'],
  [/s/g, 'z'],
  [/S/g, 'Z'],
  [/^([wW])/, 'LOL $1'],
  [/[.,']/g, '']
].map(t => (str => str.replace(t[0], t[1]) ) );
transforms.push(str => str.replace(/[^ \d\w]/ig, '').length >= 32 ? str.replace(/^(LOL |)/, '$1OMG ') : str);
transforms.push(str => str.split(' ').map((w, i) => i % 2 ? w.toUpperCase() : w).join(' '));
transforms.push(str => str.replace(/\?/g, str.split(' ').map(s => '?').join('')));
transforms.push(str => str.replace(/\!/g, str.split(' ').map((_,i) => i % 2 ? '1' : '!' ).join('')));
transforms.push(str => str[0].match(/h/i) ? str.toUpperCase() : str);

function n00bify(text)
{
  transforms.forEach(f => text = f(text));
  return text;
}

