// https://www.codewars.com/kata/54207f9677730acd490000d1

const crypto = require('crypto');
const passHash = s => crypto.createHash('md5').update(s).digest("hex");

