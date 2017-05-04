## Functional programming

### Pure functions

Relay only on input for function and give the output

Bad:

```javascript
var name = "World"
function hello() {
  return "Hello " + name
}
```

Good:

```javascript
function hello(name) {
  return "Hello" + name
}
```

Do not modify the state of the given input values. Always return an new object.
This approach is making a lot of new objects if this will became an problem you can use some structural replacement libraries like Mori, or immutable.js

### Higher order functions

You can create function that will consume input values and return an new function with some calculations done in the first one.
