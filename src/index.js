import nx from '@jswork/next';

const CHAR_AND = '&';
const CHAR_EQUAL = '=';

nx.qs = function (inUrl) {
  const result = {};
  const query =
    inUrl == null ? location.search.substring(1) : inUrl.substring(inUrl.indexOf('?') + 1);

  const params = query.split(CHAR_AND);
  let arr, pair, key, value;
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

export default nx.qs;
