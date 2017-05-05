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

name()
  .then(data => console.log(data))
  .catch((err) => log(err))
```

- **await** - can be used only in an async function so we can't use it on top level

But we can create `IIFE` here to execute it

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

```javascript
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

#### Use Promise all

```javascript
async () => {
  const result = await Promise.all([
    fetch('example.com/api/hello')
    fetch('example.com/api/next')
  ])

  return {
    firstCall: result[0],
    nextCall: result[1]
  }
}
```

**A. We can destructure this faster**

```javascript
async () => {
  const [firstCall, nextCall] = await Promise.all([
    fetch('example.com/api/hello')
    fetch('example.com/api/next')
  ])

  return {firstCall, nextCall}
}
```

- **Promise.all** - accepts any iterable not only arrays


### Await on normal value

```javascript
async () => {
  const x = await 41
}
```

Is equal to

```javascript
async () => {
  const x = await Promise.resolve(42)
}
```

### Async generators

// @todo Learn about generators

```javascript
Symbol.asyncIterator = Symbol.asyncIterator || Symbol("asyncIterator") // Mock polyfill

const delay = (ms) => new Promise( resolve => {
  setTimeout(resolve, ms)
})

async function* customGenerator() {
  await delay(1000)
  yield 1
  await delay(1000)
  yield 2
  await delay(1000)
  yield 3
}

async function main () {
  for await (const value of customGenerator()) {
    console.log(value)
  }
}
```

To run this we need to transpile this because the `for await` is not in node for now

To be more verbose this what is happening here here is the second implementation of `main` function.

```javascript
async function main () {
  const generator = customGenerator()
  while (true) {
    const {value, done} = await generator.next()
    if(done) {
      break
    }
    console.log(value)
  }
}
```
