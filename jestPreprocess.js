const babelOptions = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'auto'
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', {
      decoratorsBeforeExport: true
    }],
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', {
      helpers: false,
      regenerator: true
    }],
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }]
  ]
};

module.exports = require('babel-jest').createTransformer(babelOptions);
