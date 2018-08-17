const utils = require('./utils');

function xor(x, y) {
  return (x && !y) || (!x && y);
}

module.exports = {
  fixedXOR: (hex, hash) => {
    const decodedHex = utils.base64(hex, 'hex');

    console.log(decodedHex);

    return decodedHex;
  },
};
