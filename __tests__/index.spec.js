(function () {
  require('../src');

  Object.defineProperty(global, 'location', {
    value: {
      search: "?a=123&b=456&c=789"
    }
  });

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

    test('nx.qs with multiple same key should get list value', () => {
      var path1 = "index.html#/?a=1&tag=v1&tag=v2"
      var hash1 = nx.qs(path1);
      expect(hash1).toEqual({ a: '1', tag: ['v1', 'v2'] })
    });
  });
})();
