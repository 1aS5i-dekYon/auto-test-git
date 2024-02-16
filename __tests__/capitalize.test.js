import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');
1
console.log('Все тесты пройдены!');
