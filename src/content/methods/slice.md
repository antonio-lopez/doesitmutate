---
title: slice
mutation: no mutation
---

### Description

The <strong><code>slice()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances returns a <a href="https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy">shallow copy</a> of a portion of
an array into a new array object selected from <code>start</code> to <code>end</code>
(<code>end</code> not included) where <code>start</code> and <code>end</code> represent
the index of items in that array. The original array will not be modified.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice</a>

### Example

```javascript
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```
