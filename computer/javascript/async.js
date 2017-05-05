# Async


**Q. Async basics**

```javascript

/**
 * @return Promise All async functions are returning promises
 */
async function name() {
  const response = await fetch('example.com/api/') // this will wait unti the promis will be resolved

  return await response.json()
  // If the promise will be rejected this function will throw those values
}

name().then(data => console.log(data))
```
