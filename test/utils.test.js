const assert = require('assert');
const utils = require('../utils/utils');

describe('utils', () => {
  it('converts hex to base64', () => {
    const hex =
      '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
    const expected =
      'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';
    const base64Encoded = utils.base64(hex, 'hex');

    assert.equal(base64Encoded, expected);
  });

  it('converts hex to byte array', () => {
    const hex = '1c0111001f010100061a024b53535009181c';
    const byteArray = utils.convertHexToByteArray(hex);
    const expected = new Uint8Array([28, 1, 17, 0, 31, 1, 1, 0, 6, 26, 2, 75, 83, 83, 80, 9, 24, 28]);

    assert.equal(byteArray.toString(), expected);
  });

  it('converts byte array to hex', () => {
    const byteArray = new Uint8Array([28, 1, 17, 0, 31, 1, 1, 0, 6, 26, 2, 75, 83, 83, 80, 9, 24, 28]);
    const expected = '1c0111001f010100061a024b53535009181c';

    assert.equal(utils.convertByteArrayToHex(byteArray), expected);
  })
});
