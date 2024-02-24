---
title: push
mutation: mutates
---

### Description

The <strong><code>push()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances adds the specified elements to the end of
an array and returns the new length of the array.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push</a>

### Example

```javascript
const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
console.log(count);
// Expected output: 4 console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.push("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```
