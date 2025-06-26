import assert from 'assert';
import { passages } from '../data/passages.js';

assert.strictEqual(typeof passages, 'object', 'passages should be an object');
assert.ok(Array.isArray(passages.general), 'general category should be an array');
console.log('passages.test.js completed');
