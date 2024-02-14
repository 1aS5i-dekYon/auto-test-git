#!/usr/bin/env node

import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}
capitalize(5);

console.log('Все тесты пройдены!');
