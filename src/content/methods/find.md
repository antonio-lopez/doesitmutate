---
title: find
mutation: no mutation
---

### Description

The <strong><code>find()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances returns the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> is returned.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find</a>

### Example

```javascript
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);
// Expected output: 12
```
