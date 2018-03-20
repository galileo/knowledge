PureScript
=====

Is a functional typed language which will be transpiled to the plani JS. It is compiled before that so you can check all 
errors on the compile time.

First call
----

```
someFunction ab = a + b
someFunction \a = \b = a + b
```

Type declaration
-------

You are declaring it with `::` and pointing next call return this way ->

```
returnInt :: Int -> Int
returnInt a = a
```

Function variations
------

So from my point of view on this point, defining types in PS is the same as overloading methods in Java or C++. So this mean 
that you can add many different methods just with the different arugments in his arguments list on top of that you will call
different method.

```
nonSens :: Int -> Int -> Int
nonSens a 0 = 0
nonSens a _ = a
```

Conditional run
------

```
getGreater :: Int -> Int -> Int
getGreater n m | n > m = n
               | otherwise m
```

Special characters
----

Wildcards
*******

`-` - wildcard for integers

```

```

