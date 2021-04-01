// https://www.codewars.com/kata/58941fec8afa3618c9000184

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  if (downSpeed > upSpeed) {
    return -1;
  }
  
  let height = downSpeed;
  let days = 0;
  do {
    days++;
    height -= downSpeed;
    height += upSpeed;
  } while (height < desiredHeight)
  
  return days;
}

