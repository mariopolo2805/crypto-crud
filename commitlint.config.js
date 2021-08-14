module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'scope-empty': [2, 'never'],
    'type-enum': [2, 'always', [
      'chore',
      'build',
      'feat',
      'fix',
      'hotfix',
      'docs',
      'refactor',
      'revert',
      'style',
      'test'
    ]],
    'header-max-length': [0, 'always', 80],
  },
  ignores: [
    (message) => message.includes('release:')
  ]
};
