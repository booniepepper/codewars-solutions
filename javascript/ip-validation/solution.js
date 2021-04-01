// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

const isValidIP = ip => (
  ip = ip.split(/\./),
  ip.length == 4
    && ip.every(n => n.match(/^\d+$/))
    && ip.every(n => n.length == 1 || !n.match(/^0/))
    && ip.map(n => parseInt(n)).every(n => n < 256)
);

