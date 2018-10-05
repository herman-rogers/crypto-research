const utils = require('./utils');
const charFrequency = 'ETAOINSHRDLUBCFGJKMPQVWXYZ';

function hexToText(hex) {
  let decoded = Buffer.from(hex).toString();
  decoded = decoded.replace(/\0/g, '');
  decoded = decoded.replace(/\07/g, '');

  return decoded;
}

function decryptXorHash(bytes, xor) {
  const decrypted = [];

  for(let i = 0; i < bytes.length; i += 1) {
    const byte = bytes[i];
    const data = byte ^ xor;

    decrypted.push(data);
  }

  return hexToText(decrypted);
}

module.exports = {
  xorHashCrack: (hex, chars = charFrequency) => {
    const hexBytes = utils.convertHexToByteArray(hex);
    let decrypted = [];

    for(let i = 0; i < chars.length; i += 1) {
      const data = decryptXorHash(hexBytes, chars.charCodeAt(i));
      decrypted.push(data);
    }
    return decrypted;
  },
};
