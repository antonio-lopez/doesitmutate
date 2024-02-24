---
title: pop
mutation: mutates
---

### Description

The <strong><code>pop()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances removes the <strong>last</strong>
element from an array and returns that element. This method changes the length of the
array.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop</a>

### Example

```javascript
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop());
// Expected output: "tomato"
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
```
