module.exports = {
  base64: (value, type) => {
    return Buffer.from(value, type).toString('base64');
  },

  convertHexToByteArray: (hex) => {
    const arrayBuffer = Buffer.from(hex, 'hex');
    return new Uint8Array(arrayBuffer);
  },

  convertByteArrayToHex: (bytes) => {
    return Array.prototype.map.call(bytes, x => ('00' + x.toString(16)).slice(-2)).join('');
  }
};

