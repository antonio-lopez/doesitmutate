---
title: findIndex
mutation: no mutation
---

### Description

The <strong><code>findIndex()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances returns the index of the first element in an array that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex</a>

### Example

```javascript
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
```
