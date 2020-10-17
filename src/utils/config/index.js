const common = require('../../config.json').environment.common;
// @ts-ignore
const env = require('../../config.json').environment[process.env.NODE_ENV];

export const config = {
  ...common,
  ...env
};
