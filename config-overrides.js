const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    Components: path.resolve(__dirname, 'src/components'),
    Containers: path.resolve(__dirname, 'src/containers'),
  })
);