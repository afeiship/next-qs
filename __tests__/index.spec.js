(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.hashlize', function () {
      var url = 'http://demo.cn/shanggu/special/?auctionId=4713&v=1.0.76730bc3#/detail';
      var hashUrl = '?auctionId=4713&v=1.0.76730bc3';
      var hash = nx.hashlize(hashUrl);

      expect(hash.auctionId).toBe('4713');
      expect(hash.v).toBe('1.0.76730bc3');
    });
  });
})();
