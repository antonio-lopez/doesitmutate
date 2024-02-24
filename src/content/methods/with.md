---
title: with
mutation: no mutation
---

### Description

The <strong><code>with()</code></strong> method of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a> instances is the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods">copying</a> version of using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation">bracket notation</a> to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with</a>

### Example

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```
