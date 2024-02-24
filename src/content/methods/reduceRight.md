---
title: reduceRight
mutation: no mutation
---

### Description

The <strong><code>reduceRight()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight</a>

### Example

```javascript
const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);
console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]
```
