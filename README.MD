# next-qs
> Querystring for url based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-qs
```

## usage
```js
import '@jswork/next-qs';

const hashUrl = '?auctionId=4713&v=1.0.76730bc3';
const hash = nx.qs(hashUrl);
// { auctionId: '4713', v: '1.0.76730bc3' }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-qs/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-qs
[version-url]: https://npmjs.org/package/@jswork/next-qs

[license-image]: https://img.shields.io/npm/l/@jswork/next-qs
[license-url]: https://github.com/afeiship/next-qs/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-qs
[size-url]: https://github.com/afeiship/next-qs/blob/master/dist/next-qs.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-qs
[download-url]: https://www.npmjs.com/package/@jswork/next-qs
