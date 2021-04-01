// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  var message;
  switch (names.length) {
    case 0:
      names[0] = "no one";
    case 1:
      message = names[0] + " likes this";
      break;
    case 3:
      names = [names[0] + ", " + names[1], names[2]];
    case 2:
      message = names[0] + " and " + names[1] + " like this";
      break;
    default:
      message = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
  return message;
}

