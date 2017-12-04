var fs = require('fs');
var babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));
require('babel-register')(babelConfig);  
require('colors');
console.log('test start××××××××××××××××'.green);
require('./type.test');
console.log('test end××××××××××××××××××'.green);
