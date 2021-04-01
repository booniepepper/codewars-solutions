// https://www.codewars.com/kata/551dc350bf4e526099000ae5

function songDecoder(song){
  if (!song.match(/WUB/)){
    return song;
  }
  return song
    .replace(/^(WUB)+/,'')
    .replace(/(WUB)+$/, '')
    .replace(/(WUB)+/g, ' ');
}

