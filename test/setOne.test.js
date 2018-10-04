const assert = require('assert');
const utils = require('../src/utils');
const xor = require('../src/xorHash');

describe('set one', () => {
  it('completes challenge one, convert hex to base64', () => {
    const hex =
      '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
    const expected =
      'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';
    const base64Encoded = utils.base64(hex, 'hex');

    assert.equal(base64Encoded, expected);
  });

  it('completes set two, xor two hex values together to get a unique hash', () => {
    const hexOne = '1c0111001f010100061a024b53535009181c';
    const hexTwo = '686974207468652062756c6c277320657965';
    const expected = '746865206b696420646f6e277420706c6179';

    const hexCombination = xor.xorHash(hexOne, hexTwo);

    assert.equal(hexCombination, expected);
  });

  it('completes set three, can crack xor hash data', () => {
    const hex = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
    const cracked = xor.xorHashCrack(hex, 'X');
    let crackedString = Buffer.from(cracked).toString();

    crackedString = crackedString.replace(/\0/g, '');
    crackedString = crackedString.replace(/\07/g, '');

    assert.equal(crackedString, 'Cooking MC\'s like a pound of bacon');
  });
});
