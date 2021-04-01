// https://www.codewars.com/kata/57cf3dad05c186ba22000348

const colors = {
 black: 0,
 brown: 1,
 red: 2,
 orange: 3,
 yellow: 4,
 green: 5,
 blue: 6,
 violet: 7,
 gray: 8,
 white: 9,
 gold: 5,
 silver: 10
};

const decodeResistorColors = bands => {
  const vals = bands.split(' ').map(a => colors[a]);
  const ohms = (vals[0]*10 + vals[1]) * 10**vals[2];
  const prettyOhms = ohms < 1e3 ? ohms
                   : ohms < 1e6 ? ohms / 1e3 + 'k'
                   : ohms / 1e6 + 'M';
  const tol = vals[3] || 20;
  return `${prettyOhms} ohms, ${tol}%`;
}

