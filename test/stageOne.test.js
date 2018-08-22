const assert = require('assert');
const stageOne = require('../stageOne');

describe('stageOne', () => {
  it('xors two hex values together to get a unique hash', () => {
    const hexOne = '1c0111001f010100061a024b53535009181c';
    const hexTwo = '686974207468652062756c6c277320657965';
    const expected = '746865206b696420646f6e277420706c6179';

    const hexCombination = stageOne.challengeTwoxorCombination(hexOne, hexTwo);

    assert.equal(hexCombination, expected);
  });

  it('can crack a hex value that has be xored', () => {
    const hex = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';
    const cracked = stageOne.challengeThreexorHexCrack(hex, 'X');
    let crackedString = Buffer.from(cracked).toString();

    crackedString = crackedString.replace(/\0/g, '');
    crackedString = crackedString.replace(/\07/g, '');

    assert.equal(crackedString, 'Cooking MC\'s like a pound of bacon');
  });
});
