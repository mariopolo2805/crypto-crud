const process = require('process');
const shell = require('shelljs');
const pjson = require('../package.json');

const semver = process.argv[process.argv.length - 1].toUpperCase();

let pre;
if (semver === 'PATCH') {
  shell.echo('INFO: Open new patch version');
  pre = 'prepatch';
} else if (pjson.version.indexOf('snapshot') === -1) {
  shell.echo('INFO: Open new snapshot version');
  pre = 'preminor';
} else {
  shell.echo('INFO: Increase snapshot');
  pre = 'prerelease';
}
const snapshotCommand = `npm version ${pre} --preid=snapshot --no-git-tag-version && npm run version:snapshot`;

shell.exec(snapshotCommand, function (code) {
  process.exit(code);
});
