# Javascript

## What does hoisting mean?

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

### Immediately-Invoked Function Expression  - IIFE

(function() {
  // some calculations
}());

## What is the difference between bind call apply

All three can change the context within the function will be called.

But we split them into two groups. Fist are immediately called and second are delayed call.

If we use `call` and `apply` our function will be called immediately within the context that you will give as the first argument. This element will become `this` in that function.

The `bind` method is actually the same, but with it, we can delay the execution of that function. So it is well for the event where we can tell in which context we want to execute send the function to any other place of our application and then call it. And it will execute within the context of the bind method.
