/* config-overrides.js */

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.plugins.push(new MonacoWebpackPlugin({
    // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
    languages: ['json', 'html']
  }));
  return config;
}