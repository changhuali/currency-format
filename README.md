# lch-currency-format

## Introduction
A function that splits number with comma, give it a number, you can get a currency format string

## Installation

### use npm
npm install lch-currency-format

## Usage

### es6
<pre>
<code>
import currencyFormat from 'lch-currency-format';
</code>
</pre>

### in nodejs
<pre>
<code>
require('lch-currency-format');
</code>
</pre>

## example

<pre>
<code>
import currencyFormat from 'lch-currency-format';
const result = currencyFormat(1234567.1234);
console.log(result);
// outputs => '1,234,567.1234'
</code>
</pre>

