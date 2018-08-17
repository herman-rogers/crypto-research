var assert = require('assert');
var cryptopals = require('../cryptopals');

describe('cryptopals', function() {
  it('converts XORs a hex value', () => {
    const hex = '1c0111001f010100061a024b53535009181c';
    const hash = '686974207468652062756c6c277320657965';
    const expected = '746865206b696420646f6e277420706c6179j';

    const output = cryptopals.fixedXOR(hex, hash);

    assert.equal(output, expected);
  });
});
