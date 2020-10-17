const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

/**
 *
 * @param {*} config
 */
module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      // frameworks: [],
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        {
          pattern: config.grep ? config.grep : 'test/unit/**/*.test.js',
          type: 'module'
        }
      ],

      coverageReporter: {
        thresholds: {
          global: {
            statements: 50,
            lines: 50,
            branches: 50,
            functions: 50
          }
        }
      },

      // see the karma-esm docs for all options
      esm: {
        // if you are using 'bare module imports' you will need this option
        nodeResolve: true,
        customBabelConfig: {
          plugins: [
            [
              '@babel/plugin-proposal-decorators',
              {
                decoratorsBeforeExport: true
              }
            ],
            '@babel/plugin-proposal-class-properties',
            [
              '@babel/plugin-proposal-object-rest-spread',
              { useBuiltIns: true }
            ]
          ]
        }
      }
    })
  );
  return config;
};
