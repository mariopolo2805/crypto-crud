const fs = require('fs');
const pjson = require('../package.json');

fs.readFile('CHANGELOG.md', 'utf8', function (err, data) {
  if (err) return console.log(err);
  const result = data.replace(/### (\d*).(\d*).(\d*).(\d*) /, '### ' + pjson.version + ' ');
  fs.writeFile('CHANGELOG.md', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
