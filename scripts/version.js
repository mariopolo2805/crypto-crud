const fs = require('fs');
const pjson = require('../package.json');

fs.readFile('src/version.js', 'utf8', function (err, data) {
  if (err) return console.log(err);
  const result = data.replace(/window.__version = '(.*?)';/g, 'window.__version = \'' + pjson.version + '\';');
  fs.writeFile('src/version.js', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
