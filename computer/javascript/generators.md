# Generators

It is represented with `*` sign after `function`.

```javascript
function* createGenerator() {
  console.log()
}
```

**Calling createGenerator**

```javascript
createGenerator()
```

Will not execute the `console.log` command.

**Execution**

```javascript
const generator = createGenerator()
generator.next()
```

**My tryouts**

```javascript
function* logger()
{
  console.log('start')
  console.log('end')
  yield {hello: 'mate'}
  console.log('second')
}
console.log(logger()) // {}
console.log(logger().next()) // { value: { hello: 'mate' }, done: false }
>> start
>> end

console.log(logger()) // {}
console.log(logger().next()) // { value: { hello: 'mate' }, done: false }
>> start
>> end

console.log(logger().next().next()) // Syntax error

const log = logger()
console.log(log.next()) // { value: { hello: 'mate' }, done: false }
>> start
>> end

console.log(log.next()) // { value: undefined, done: true }
>> second
```

**Add data for yield**

```javascript
function* logger(creatorValue)
{
  console.log(`start: ${creatorValue}`)

  const word = yield 12
  console.log(`word: ${word}`)
}

const log = logger('valueForCreatorValue')

// IDK: Where does the value for first next goes? >> `10` ??
console.log(log.next(10)) // { value: 12, done: false }
>> start: valueForCreatorValue
console.log(log.next('the Word')) // { value: undefined, done: true }
>> word: the Word
```

**Communicate errors form the generator host**

Between `next()` calls there can happen a lot of things we need to communicate in some way to the generator that something went wrong in the base code.

We can do this via `throw()` method.

```javascript
function* logger(creatorValue)
{
  try {
    console.log(`start: ${creatorValue}`)

    const word = yield 12
    console.log(`word: ${word}`)
  } catch (err) {
    console.log(err.message)
  }
}

const log = logger('valueForCreatorValue')

console.log(log.next()) // { value: 12, done: false }
log.throw(new Error('External API not responding'))
>> External API not responding
```

**Q. Can we use throw before the first next?**

No, if we use throw on `log` object `log.throw('Something wrong happened!')` we will end up with an error.

```javascript
(function (exports, require, module, __filename, __dirname) { function* logger(creatorValue)
Something wrong happened!
```

I still don't know why :D

### Iterate generators

```javascript
const log = logger('valueForCreatorValue')

for (let entry of log) {
  console.log(entry)
}
```

We don't need to bother with the `.next()` call and returns

### Nesting generators

```javascript
function* create3To4Generator() {
  yield 3
  yield 4
}

function* createCounter()
{
  yield 1
  yield 2
  yield* create3To4Generator() // remember to execute this don't leave here just generator name `create3To4Generator`
  yield 5
}

for (let count of createCounter()) { // createCounter - needs to be executed ()!!
  console.log(count)
}
```

- **yield** - delegates the control from current generator to the nested one

**return value from generator**

```javascript
function* create3To4Generator() {
  yield 3
  return 4
}

function* createCounter()
{
  yield 1
  yield 2
  const four = yield* create3To4Generator()
  console.log(four)
  yield 5
}

for (let count of createCounter()) { // createCounter - needs to be executed ()!!
  console.log(count)
}
```

### Make async code look like sync

```javascript
function* createQuoteFetcher() {
  const response = yield fetch('example.com/api')
  const quote = yield response.json()
  return `${quote.text}`
}

const coroutine = (gen) => {
  const generator = gen()

  const handle = (result) => {
    if (result.done) return Promise.resolve(result.value)
    return Promise.resolve(result.value)
      .then(res => handle(generator.next(res)))
	}

  return handle(generator.next())
}

const quoteFetcher = coroutine(createQuoteFetcher)
quoteFetcher.then(quote => console.log(quote))
```

Instead of using `coroutine` function we should install `co` module from node.
