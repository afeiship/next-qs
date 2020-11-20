# next-hashlize
> Hashlize for url based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-hashlize
```

## usage
```js
import '@jswork/next-hashlize';

const hashUrl = '?auctionId=4713&v=1.0.76730bc3';
const hash = nx.hashlize(hashUrl);
// { auctionId: '4713', v: '1.0.76730bc3' }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-hashlize/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-hashlize
[version-url]: https://npmjs.org/package/@jswork/next-hashlize

[license-image]: https://img.shields.io/npm/l/@jswork/next-hashlize
[license-url]: https://github.com/afeiship/next-hashlize/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-hashlize
[size-url]: https://github.com/afeiship/next-hashlize/blob/master/dist/next-hashlize.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-hashlize
[download-url]: https://www.npmjs.com/package/@jswork/next-hashlize
