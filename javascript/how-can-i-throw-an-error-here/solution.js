// https://www.codewars.com/kata/5970f479e75b6c00ce000043

const THE_ACCURSED_WORD = 'th' + 'row';
const THE_UNHOLY_UTTERANCE = `Just ${THE_ACCURSED_WORD} like this!`;
function bang() {
  try {
    0..toFixed(-1)
  }
  catch (e) {
    const evil = e.__proto__;
    evil.message = THE_UNHOLY_UTTERANCE;
    console.log(evil.message);
    (function*(){})()[THE_ACCURSED_WORD](evil);
  }
}

