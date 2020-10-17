const inquirerPrompt = /** @type {*} */(require('inquirer-directory'));

/**
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = plop => {
  // general helpers
  plop.setHelper('capitalCase', require('change-case').capitalCase);
  plop.setHelper('docPathCreator', require('./plop-utils/functions/doc-path-creator'));
  plop.setHelper('dateToday', require('./plop-utils/functions/date-today'));
  plop.setHelper('addLicenseSnippet', require('./plop-utils/functions/add-license-snippet'));
  plop.setHelper('absolutePath', require('./plop-utils/functions/absolute-path').bind(this, plop));
  plop.setHelper('absoluteDocPath', require('./plop-utils/functions/absolute-doc-path').bind(this, plop));

  // add custom inquirer prompt type
  plop.addPrompt('directory', /** @type {import('inquirer').PromptModule} */(inquirerPrompt));

  // generator setting
  plop.setGenerator('create:file', {
    description: 'Create a new file',
    prompts: require('./plop-utils/prompts/add-file')(plop),
    actions: require('./plop-utils/actions/add-file')()
  });

  plop.setGenerator('create:doc', {
    description: 'Create a new documentation',
    prompts: require('./plop-utils/prompts/add-doc')(plop),
    actions: require('./plop-utils/actions/add-doc')()
  });
};
