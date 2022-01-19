/*!
 * name: @jswork/next-qs
 * description: Querystring for url based on next.
 * homepage: https://js.work
 * version: 1.0.0
 * date: 2022-01-19 11:02:29
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var LOCATION = global.location;
  var CHAR_AND = '&';
  var CHAR_EQUAL = '=';

  nx.qs = function (inUrl) {
    var result = {};
    var query =
      inUrl == null ? LOCATION.search.substring(1) : inUrl.substring(inUrl.indexOf('?') + 1);
    var params = query.split(CHAR_AND);
    var arr, pair, key, value;
    params.forEach(function (param) {
      pair = param.split(CHAR_EQUAL);
      key = pair[0];
      value = pair[1];
      if (value) {
        switch (typeof result[key]) {
          case 'undefined':
            result[key] = decodeURIComponent(value);
            break;
          case 'string':
            arr = [result[key], decodeURIComponent(value)];
            result[key] = arr;
            break;
          default:
            result[key].push(decodeURIComponent(value));
        }
      }
    });

    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.hashlize;
  }
})();
