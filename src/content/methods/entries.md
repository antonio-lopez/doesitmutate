---
title: entries
mutation: no mutation
---

### Description

The <strong><code>entries()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances returns a new <em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator">array iterator</a></em> object that contains the key/value pairs for each index in the array.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries</a>

### Example

```javascript
const array1 = ["a", "b", "c"];
const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]
console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
```
