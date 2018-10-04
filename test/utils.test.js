const assert = require('assert');
const utils = require('../src/utils');

describe('utils', () => {
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
