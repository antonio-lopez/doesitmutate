---
title: keys
mutation: no mutation
---

### Description

The <strong><code>keys()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances returns a new <em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator">array iterator</a></em> object that contains the keys for each index in the array.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys</a>

### Example

```javascript
const array1 = ["a", "b", "c"];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2
```
