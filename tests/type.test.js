import formatter from '../lib';

const isFunction = typeof formatter === 'function';

if (isFunction) {
  console.log('type check is right'.green);
} else {
  console.log('type check is failt'.red);
}
