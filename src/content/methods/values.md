---
title: values
mutation: no mutation
---

### Description

The <strong><code>values()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances returns a new <em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator">array iterator</a></em> object that iterates the value of each item in the array.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values</a>

### Example

```javascript
const array1 = ["a", "b", "c"];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```
