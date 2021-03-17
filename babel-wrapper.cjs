// The babel mode needs to be set to 'upwards' so that it uses the root config
// in every sub package. However, this is a babel runtime option and can't be
// set in the babel config. We have to create a babelWrapper file that wraps
// babel-jest, sets the rootMode and exports it.
// Note that we use the .cjs extension, this is important to tell node that
// its a common js file.
// https://babeljs.io/docs/en/config-files#jest
module.exports = require('babel-jest').createTransformer({
  rootMode: 'upward'
});
