// .save of node session. Removed some duplication, cleaned slightly
//
// Solution pages retrieved via API: https://dev.codewars.com

const fs = require('fs');

const getSolves = f => JSON.parse(fs.readFileSync(f).toString())['data'];

const solves = getSolves('2020-02-20-solve-data-01.json').concat(getSolves('2020-02-20-solve-data-01.json'))

const handleData = ({id, slug, completedLanguages, completedAt}) => {
  completedLanguages.forEach(lang => {
    try { fs.mkdirSync(lang) } catch (e) { }
    let path = lang + "/" + slug;
    try { fs.mkdirSync(path) } catch (e) { }
    let file = "TODO: Paste code, update timestamp.\n";
    file += "\n";
    file += `https://www.codewars.com/kata/${id}/solutions/${lang}/me\n`;
    path += "/" + "todo-paste-solution.txt"
    fs.writeFileSync(path, file);
  });
}

solves.forEach(handleData);

const timeFiles = ({slug, completedLanguages, completedAt}) => {
  completedLanguages.forEach(lang => {
    let path = `${lang}/${slug}/todo-paste-solution.txt`;
    let time = new Date(completedAt);
    try { fs.utimesSync(path, time, time); } catch (e) { console.error(e); }
  });
}

solves.forEach(timeFiles);

