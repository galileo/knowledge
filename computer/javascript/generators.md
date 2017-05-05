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
