const utils = require('../utils/utils');

function decryptXorHash(bytes, xor) {
  const decrypted = [];

  for(let i = 0; i < bytes.length; i += 1) {
    const byte = bytes[i];

    decrypted.push(byte ^ xor);
  }
  return decrypted;
}

module.exports = {
  challengeTwoxorCombination: (hexOne, hexTwo) => {
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

  challengeThreexorHexCrack: (hex, characters) => {
    const hexBytes = utils.convertHexToByteArray(hex);
    let decrypted = '';

    for(let i = 0; i < characters.length; i += 1) {
      decrypted = decryptXorHash(hexBytes, characters.charCodeAt(i));
    }
    return decrypted;
  },
};
