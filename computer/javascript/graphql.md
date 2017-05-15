# Graph QL

Main reasons behind?

- client specify the data it needs
- aggregate data from multiple resources
- type system for describe data

## Real world metaphore

It is like having an personal assitant, who can do things for you and aggregate results for you.

## Building blocks

- schema
- queries
- resolvers

## Getting results

To get results you need to `query` the server for data.

```
query {
  stuff
}
```

### Nesting query
You can nest query and ask for specific data.

```
query {
  stuff: {
    eggs,
    shirt,
    pizza
  }
}
```

If you are client you don't need to be aware where from those data will came from the only things matters for you is that you will receive them.

### Arrays

```
query {
  posts: { # this is an array
    title,
    body,
    author { # we can go deeper
      name,
      avatarUrl
    }
  }
}
```

### Arguments

If you want specific post or filter some data you can use Arguments

```
query {
  post(id: "123") {
    title,
    author {
      name,
      avatarUrl
    }
  }
}
```

### Dynamic arguments - functions

```
query getMyPost($id: string) {
  post(id: $id) {
    title,
    author {
      name,
      avatarUrl
    }
  }
}
```

Great example of graphQL API can be found on GitHub https://developer.github.com/early-access/graphql/explorer/

### GraphQL anatomy

![Elements](https://cdn-images-1.medium.com/max/800/1*XthnQqgmM5Ag4TmwM6UVWw.png)


## Resolvers
Even the best personal assistant in the world can’t go and get your dry cleaning unless you give them an address.

This is how to tell GraphQL how to resolve resources.

### Resolver example for root element

We can resolve data with this as an root element so we can query directely for them.

```
Query: {
  post(root, args) {
    return Posts.find({ id: args.id });
  }
}
```

### Resolver for sub elements

We can resolve for authors inside Posts branch.

```
Query: {
  post(root, args) {
    return Posts.find({ id: args.id });
  }
},
Post: {
  author(post) {
    return Users.find({ id: post.authorId})
  }
}
```

The key concept to understand here is that with GraphQL, your API schema and your database schemas are decoupled. In other words, there might not be any author and commentsCount fields in our database, but we can “simulate” them through the power of resolvers.

## Get started

You will need

- A GraphQL server that serves your API.
- A GraphQL client that connects to your endpoint.

GraphQL is just an specification so you can use actually whatever server and client you can create even your own.

Some existing approaches

**Server**
(GrapQL-JS)[https://github.com/graphql/graphql-js] + (express-graphql)[https://github.com/graphql/express-graphql] you can go throught setup here (run express graphql)[http://graphql.org/graphql-js/running-an-express-graphql-server/]

Or something different like appolo (graphql-server)[http://dev.apollodata.com/tools/graphql-server/]

**Client**

You can call the api directly, but it can be easier with some dedicated clients

- (Relay)[https://facebook.github.io/relay/]
- (Apollo)[http://dev.apollodata.com/core/]

Frameworks connectors:

- (React Apollo)[http://dev.apollodata.com/react/]
- (React Angular)

**Tools**

- In browser IDE - (Graphiql)[https://github.com/graphql/graphiql]
- Batching, caching for performance hit - (DataLoader)[https://github.com/facebook/dataloader]
- https://www.graph.cool/


## Resources:

https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf
https://dev-blog.apollodata.com/why-you-might-want-a-graphql-client-e864050f789c

Todo

https://github.com/zeit/next.js/tree/master/examples/with-apollo
https://blog.hichroma.com/graphql-react-tutorial-part-1-6-d0691af25858#.o54ygcruh
Awesome place - https://www.graph.cool/
Go through the docs http://graphql.org/learn/schema/
Try to use create GraphQL Server to gain additional exp. https://blog.hichroma.com/create-graphql-server-instantly-scaffold-a-graphql-server-1ebad1e71840
Read about
https://learngraphql.com/
https://dev-blog.apollodata.com/ https://dev-blog.apollodata.com/the-anatomy-of-a-graphql-query-6dffa9e9e747
Watch the yt video from Bartosz Król from x-team videos
http://docs.vulcanjs.org/
