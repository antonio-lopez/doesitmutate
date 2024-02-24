---
title: splice
mutation: mutates
---

### Description

The <strong><code>splice()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances changes the contents of an array by
removing or replacing existing elements and/or adding new elements <a href="https://en.wikipedia.org/wiki/In-place_algorithm">in place</a>.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice</a>

### Example

```javascript
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```
