# Javascript

**Q. What does hoisting mean?

```javascript
// ReferenceError: noSuchVariable is not defined
console.log(noSuchVariable);
```

But this is how it will work even if we declare it later

```javascript
// Outputs: undefined
console.log(declaredLater);

var declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);
```
