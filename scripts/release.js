const process = require('process');
const shell = require('shelljs');
const pjson = require('../package.json');

let semver = process.argv[process.argv.length - 1].toUpperCase();

if (pjson.version.indexOf('snapshot') === -1) {
  semver = 'PATCH';
}

let flag;
let version;

if (semver === 'MAJOR') {
  flag = '-M';
  version = 'major';
} else if (semver === 'PATCH') {
  flag = '-p';
  version = 'patch';
} else {
  flag = '-m';
  version = 'minor';
}

const versionCommand = `changelog ${flag} && npm run changelog:commit && npm version ${version} && npm run version:release`;

shell.exec(versionCommand, function (code) {
  process.exit(code);
});
