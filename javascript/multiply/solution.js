// https://www.codewars.com/kata/50654ddff44f800200000004

const giveFucks = (fucks, toGive) => (
  doILookLikeIGiveAFuck = fucks > 0,
  giveLessFucks = () => giveFucks(fucks - 1, toGive),

  doILookLikeIGiveAFuck? toGive + giveLessFucks() : 0
);

const multiply = giveFucks;

