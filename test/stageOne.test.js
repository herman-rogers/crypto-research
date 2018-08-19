const assert = require('assert');
const crypto = require('../stageOne');

describe('stageOne', () => {
  it('xor combines two hex values', () => {
    const hexOne = '1c0111001f010100061a024b53535009181c';
    const hexTwo = '686974207468652062756c6c277320657965';
    const expected = '746865206b696420646f6e277420706c6179';

    const hexCombination = crypto.xorCombination(hexOne, hexTwo);

    assert.equal(hexCombination, expected);
  });
});
