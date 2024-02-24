---
title: sort
mutation: mutates
---

### Description

The <strong><code>sort()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances sorts the elements of an array <em><a href="https://en.wikipedia.org/wiki/In-place_algorithm">in place</a></em> and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort</a>

### Example

```javascript
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
```
