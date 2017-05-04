# Redux

Is a library when we can store the application state

**Q. Why to aviod state mutation in actions**

The reason is that we should not work on the same object and then return it, it is nice approach at all.  But the more important reason is that `redux` will emit event about state changed if the reference to this object did changed.

This is a very fast way to check if the state was changed or now without heavy object comparision.
