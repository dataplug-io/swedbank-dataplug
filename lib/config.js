const dataplug = require('@dataplug/dataplug');

const declaration = dataplug.config.declare();
const headersMapping = dataplug.config.map();
const queryMapping = dataplug.config.map();

module.exports = {
  declaration,
  mapping: {
    headers: headersMapping,
    query: queryMapping
  }
};
