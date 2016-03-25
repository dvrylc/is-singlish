# is-singlish [![Build Status](https://travis-ci.org/dvrylc/is-singlish.svg?branch=master)](https://travis-ci.org/dvrylc/is-singlish)

> Check whether a string contains Singlish phrases

## Install
```
$ npm install --save is-singlish
```

## Usage
```js
const isSinglish = require('is-singlish');

isSinglish('I think can la').then(result => {
  console.log(result);
});
// true

isSinglish('I think this is possible').then(result => {
  console.log(result);
});
// false
```

## Related
- [is-singlish-cli](https://github.com/dvrylc/is-singlish-cli) - CLI for this module

## License
MIT © [Daryl Chan](https://darylchan.net)
