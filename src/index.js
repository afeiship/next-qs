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
        var _value = decodeURIComponent(value);
        switch (typeof result[key]) {
          case 'undefined':
            result[key] = _value;
            break;
          case 'string':
            arr = [result[key], _value];
            result[key] = arr;
            break;
          default:
            result[key].push(_value);
        }
      }
    });

    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.qs;
  }
})();
