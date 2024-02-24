---
title: fill
mutation: mutates
---

### Description

The <strong><code>fill()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill</a>

### Example

```javascript
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```
