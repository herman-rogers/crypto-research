const fs = require('fs');
const assert = require('assert');
const lineReader = require('readline');
const utils = require('../src/utils');
const xor = require('../src/xorHash');
const crack = require('../src/xorCrack');

describe('set one', () => {
  const vectors = JSON.parse(fs.readFileSync(
    `${__dirname}/crypto_vectors.json`,
    'utf8'
  ));

  it('completes challenge one, convert hex to base64', () => {
    const expected = vectors.base64;
    const base64Encoded = utils.base64(vectors.hex, 'hex');

    assert.equal(base64Encoded, expected);
  });

  it('completes challenge two, xor two hex values together to get a unique hash', () => {
    const hexCombination = xor.xorHash(
      vectors.xorHexOne,
      vectors.xorHexTwo
    );

    assert.equal(hexCombination, vectors.xor);
  });

  it('completes challenge three, can crack xor hash data', () => {
    const hex = vectors.xorCrackOne;
    const cracked = crack.xorHashCrack(hex, 'X');

    assert.equal(cracked, 'Cooking MC\'s like a pound of bacon');
  });

  it('completes challenge four, detect single char xor', () => {
    // let crackedData = {};
    // const reader = lineReader.createInterface({
    //   input: fs.createReadStream(`${__dirname}/hash_file.txt`)
    // });

    // reader.on('line', (line) => {
    //   crackedData[line] = crack.xorHashCrack(line);
    // }).on('close', () => {
    //   fs.writeFile(`${__dirname}/cracked.json`, JSON.stringify(crackedData), () => {
    //     console.log("The file was saved!");
    //   });
    // });
  })
});
