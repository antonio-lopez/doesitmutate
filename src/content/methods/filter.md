---
title: filter
mutation: no mutation
---

### Description

The <strong><code>filter()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances creates a <a href="https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy">shallow copy</a> of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter</a>

### Example

```javascript
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```
