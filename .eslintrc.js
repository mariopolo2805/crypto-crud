module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  "ignorePatterns": [
    "node_modules",
    "scripts",
    "**/*.spec.ts",
    "src/main.ts",
    "src/test.ts",
    "src/polyfills.ts",
    "src/version.js",
    "src/environments/*",
    ".eslintrc.js"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.app.json",
    "sourceType": "module"
  },
  "plugins": [
    "@angular-eslint/eslint-plugin",
    "@angular-eslint/eslint-plugin-template",
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "import",
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "eslint-plugin-prefer-arrow"
  ],
  "rules": {
    "@angular-eslint/component-class-suffix": "error",
    "@angular-eslint/component-selector": [
      "error",
      {
        "type": "element",
        "prefix": [
          "crypto",
          "mat"
        ],
        "style": "kebab-case"
      }
    ],
    "@angular-eslint/contextual-lifecycle": "error",
    "@angular-eslint/directive-class-suffix": "error",
    "@angular-eslint/directive-selector": [
      "error",
      {
        "type": "attribute",
        "prefix": [
          "crypto",
          "mat"
        ],
        "style": "camelCase"
      }
    ],
    "@angular-eslint/no-conflicting-lifecycle": "error",
    "@angular-eslint/no-host-metadata-property": "error",
    "@angular-eslint/no-input-rename": "error",
    "@angular-eslint/no-inputs-metadata-property": "error",
    "@angular-eslint/no-output-native": "error",
    "@angular-eslint/no-output-on-prefix": "error",
    "@angular-eslint/no-output-rename": "error",
    "@angular-eslint/no-outputs-metadata-property": "error",
    "@angular-eslint/use-lifecycle-interface": "error",
    "@angular-eslint/use-pipe-transform-interface": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array"
      }
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "Object": {
            "message": "Avoid using the `Object` type. Did you mean `object`?"
          },
          "Function": {
            "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
          },
          "Boolean": {
            "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
          },
          "Number": {
            "message": "Avoid using the `Number` type. Did you mean `number`?"
          },
          "String": {
            "message": "Avoid using the `String` type. Did you mean `string`?"
          },
          "Symbol": {
            "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
          }
        }
      }
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": false
      }
    }],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error"
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        "path": "always",
        "types": "prefer-import",
        "lib": "always"
      }
    ],
    "@typescript-eslint/tslint/config": [
      "error",
      {
        "rules": {
          "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-module",
            "check-separator",
            "check-rest-spread",
            "check-type",
            "check-typecast",
            "check-type-operator",
            "check-preblock",
            "check-postbrace"
          ],
          "typedef-whitespace": [
            true,
            {
              "call-signature": "nospace",
              "index-signature": "nospace",
              "parameter": "nospace",
              "property-declaration": "nospace",
              "variable-declaration": "nospace"
            },
            {
              "call-signature": "onespace",
              "index-signature": "onespace",
              "parameter": "onespace",
              "property-declaration": "onespace",
              "variable-declaration": "onespace"
            }
          ]
        }
      }
    ],
    "@typescript-eslint/unbound-method": [
      "error",
      {
        "ignoreStatic": true
      }
    ],
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": "off",
    "comma-dangle": ["error", "always-multiline"],
    "complexity": "off",
    "constructor-super": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "off",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "import/no-deprecated": "warn",
    "import/no-unresolved": "off",
    "import/named": "warn",
    "import/namespace": "warn",
    "import/no-named-as-default": "off",
    "import/export": "warn",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", ['parent', 'sibling', 'index']],
        "pathGroups": [
          {
            "pattern": "@angular/**",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "primeng/**",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "ftcomun/**",
            "group": "external",
            "position": "after"
          },
          {
            "pattern": "@core/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@modules/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@shared/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@env/**",
            "group": "internal",
            "position": "before"
          },
        ],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "newlines-between": "never",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "indent": ["error", 2],
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/newline-after-description": "error",
    "jsdoc/no-types": "error",
    "key-spacing": ["error"],
    "max-classes-per-file": "off",
    "max-len": [
      "error",
      {
        "code": 180,
      }
    ],
    "new-parens": "error",
    "no-array-constructor": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
    ],
    "no-debugger": "error",
    "no-empty": "off",
    "no-empty-function": "off",
    "no-eval": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": [
      "error",
      { "max": 1 }
    ],
    "no-new-wrappers": "error",
    "no-restricted-imports": [
      "error",
      "rxjs/Rx"
    ],
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.object.name=\"console\"][callee.property.name=/^(debug|info|time|timeEnd|trace)$/]",
        "message": "Unexpected property on console object was called"
      }
    ],
    "no-shadow": "off",
    "no-tabs": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
    "no-var": "error",
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "prefer-arrow/prefer-arrow-functions": "error",
    "prefer-const": "error",
    "quote-props": [
      "error",
      "as-needed"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "radix": "error",
    "require-await": "off",
    "semi": "error",
    "sort-keys": "off",
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/"
        ]
      }
    ],
    "use-isnan": "error",
    "valid-typeof": "off"
  }
};
