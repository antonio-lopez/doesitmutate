---
title: join
mutation: no mutation
---

### Description

The <strong><code>join()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances creates and
returns a new string by concatenating all of the elements in this array,
separated by commas or a specified separator string. If the array has
only one item, then that item will be returned without using the separator.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join</a>

### Example

```javascript
const elements = ["Fire", "Air", "Water"];
console.log(elements.join());
// Expected output: "Fire,Air,Water"
console.log(elements.join(""));
// Expected output: "FireAirWater"
console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
```
