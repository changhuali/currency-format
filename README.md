# lch-currency-format

## Introduction
A function that splits number with comma, give it a number, you can get a currency format string

## Installation

*use npm*
```
npm install lch-currency-format
```

## Usage
*es6*
```js
import currencyFormat from 'lch-currency-format';
```

*nodejs*
```js
var currencyFormat = require('lch-currency-format');
```

## example
```js
import currencyFormat from 'lch-currency-format';
const result = currencyFormat(1234567.1234);
console.log(result);
// outputs => '1,234,567.1234'
```

