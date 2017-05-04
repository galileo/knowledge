# Redux

Is a library when we can store the application state

**Q. Why to aviod state mutation in actions**

The reason is that we should not work on the same object and then return it, it is nice approach at all.  But the more important reason is that `redux` will emit event about state changed if the reference to this object did changed.

This is a very fast way to check if the state was changed or now without heavy object comparision.

**Q. What is the overview of state action**

It can be meant as an state reducer

```javascript
(state, action) => state
(acc, val) => acc
reducer((acc, val) => acc)
```

So this is reducer not a store, from this came redux instead of flux.
