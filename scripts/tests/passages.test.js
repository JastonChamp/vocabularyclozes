import assert from 'assert';
import { passages } from '../data/passages.js';

assert.strictEqual(typeof passages, 'object', 'passages should be an object');

// Explicitly check the known categories
// After restructuring passages now includes several specialized categories
const required = [
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

// Verify each wordBox entry has a matching definition
for (const [catName, arr] of Object.entries(passages)) {
  arr.forEach((p, idx) => {
    assert.ok(Array.isArray(p.wordBox), `${catName}[${idx}].wordBox should be an array`);
    assert.ok(Array.isArray(p.definitions), `${catName}[${idx}].definitions should be an array`);
    assert.strictEqual(p.wordBox.length, p.definitions.length,
      `${catName}[${idx}] definitions should match wordBox length`);
    
    // verify answers/hints/explanations/clueWords align with blanks
    const blankCount = (p.text.match(/___\s*\(\d+\)\s*___/g) || []).length;
    const arrays = ['answers', 'hints', 'explanations', 'clueWords'];
    arrays.forEach(prop => {
      assert.ok(Array.isArray(p[prop]), `${catName}[${idx}].${prop} should be an array`);
      assert.strictEqual(p[prop].length, blankCount,
        `${catName}[${idx}].${prop} length should match number of blanks`);
    });
  });
}

console.log('passages.test.js completed');
