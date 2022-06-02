(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.qs', function () {
      var hashUrl = '?auctionId=4713&v=1.0.76730bc3';
      var hash = nx.qs(hashUrl);

      expect(hash.auctionId).toBe('4713');
      expect(hash.v).toBe('1.0.76730bc3');
    });

    test('nx.qs with hash', () => {
      var hashUrl = 'index.html#/sequence-filter?lang=zh-CN&token=xxx&code=yyy';
      var hash = nx.qs(hashUrl);
      expect(hash).toEqual({ lang: 'zh-CN', token: 'xxx', code: 'yyy' });
    });
  });
})();
