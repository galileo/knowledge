# Async


### Async basics

```javascript

/**
 * @return Promise All async functions are returning promises
 */
async function name() {
  const response = await fetch('example.com/api/') // this will wait unti the promis will be resolved

  return await response.json()
  // If the promise will be rejected this function will throw those values
}

name().then(data => console.log(data)).catch((err) => log(err))
```

- await - can be used only in an async funciton so we can not use it on top level

But we can create IIFE here to execute it

```javascript
(async () => await name()())
```

### Async class method

```javascript
class ApiClient {
  async function fetchData() {
    const response = await fetch('example.com/api/')
    return await response.json()
  }
}
```

### Concurent api cals

**BAD: because the calls would be done sequentialy**
````
async () => {
  const firstCall = await fetch('example.com/api/hello')
  const waitingUntilFirstCallEnds = await fetch('example.com/api/next')

  return {
    firstCall,
    waitingUntilFirstCallEnds
  }
}
```
**BETTER: Call both api same time but wait for responses**

```javascript
async () => {
  const firstCallPromise = fetch('example.com/api/hello')
  const nextCallPromise = fetch('example.com/api/next')

  const firstCall = await firstCallPromise
  const nextCall = await nextCallPromise

  return {
    firstCall,
    nextCall
  }
}
```
