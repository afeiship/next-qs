var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-hashlize');

describe('next/hashlize', function () {

  it('nx.hashlize', function () {
    var url = 'http://demo.cn/shanggu/special/?auctionId=4713&v=1.0.76730bc3#/detail';
    var hashUrl = '?auctionId=4713&v=1.0.76730bc3';
    var hash = nx.hashlize( hashUrl );

    assert.equal(hash.auctionId,'4713');
    assert.equal(hash.v,'1.0.76730bc3');
  });

});
