---
title: every
mutation: no mutation
---

### Description

The <strong><code>every()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every</a>

### Example

```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// Expected output: true
```
