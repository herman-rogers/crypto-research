const utils = require('./utils');

module.exports = {
  xorHash: (hexOne, hexTwo) => {
    const hexOneBytes = utils.convertHexToByteArray(hexOne);
    const hexTwoBytes = utils.convertHexToByteArray(hexTwo);

    let hash = [];
    for (let i = 0; i < hexOneBytes.length; i += 1) {
      const firstByte = hexOneBytes[i];
      const secondByte = hexTwoBytes[i];

      hash.push(firstByte ^ secondByte);
    }

    // Returns a hex combination xor'd from two hex's
    return utils.convertByteArrayToHex(hash);
  },
};
