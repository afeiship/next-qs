(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.qs should get value when input is string', function () {
      var hashUrl = '?auctionId=4713&v=1.0.76730bc3';
      var hash = nx.qs(hashUrl);

      expect(hash.auctionId).toBe('4713');
      expect(hash.v).toBe('1.0.76730bc3');
    });

    test('nx.qs should get value when url is hash-router style', () => {
      var hashUrl = 'index.html#/sequence-filter?lang=zh-CN&token=xxx&code=yyy';
      var hash = nx.qs(hashUrl);
      expect(hash).toEqual({ lang: 'zh-CN', token: 'xxx', code: 'yyy' });
    });

    test('nx.qs with multiple same key should get list value', () => {
      var path1 = "index.html#/?a=1&tag=v1&tag=v2"
      var hash1 = nx.qs(path1);
      expect(hash1).toEqual({ a: '1', tag: ['v1', 'v2'] })
    });

    test('nx.qs should use location.search when input is null/undefined', () => {
      location.href = "http://localhost:3000/?a=1&tag=v1&tag=v2"
      const hash1 = nx.qs()
      expect(hash1).toEqual({ a: '1', tag: ['v1', 'v2'] })
    })
  });
})();
