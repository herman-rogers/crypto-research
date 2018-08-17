var assert = require('assert');
var utils = require('../utils');

describe('utils', function() {
  it('converts hex to base64', () => {
    const hex =
      '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
    const expected =
      'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';
    const base64Encoded = utils.base64(hex, 'hex');

    assert.equal(base64Encoded, expected);
  });
});
