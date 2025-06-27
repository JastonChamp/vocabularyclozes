import assert from 'assert';
import { passages } from '../data/passages.js';

assert.strictEqual(typeof passages, 'object', 'passages should be an object');

// Explicitly check the known categories
// After restructuring passages now includes several specialized categories
const required = [
  'general',
  'synonyms',
  'antonyms',
  'academic',
  'contextInference',
  'definitionMatch',
  'synonymContrast',
  'morphologicalAffix',
  'collocationCloze',
  'grammaticalRole',
  'connectorClue'
];
for (const cat of required) {
  assert.ok(cat in passages, `${cat} category should exist`);
  assert.ok(Array.isArray(passages[cat]), `${cat} category should be an array`);
}

// Any additional categories in the data should also be arrays
for (const [key, value] of Object.entries(passages)) {
  assert.ok(Array.isArray(value), `Category '${key}' should be an array`);
}

console.log('passages.test.js completed');
