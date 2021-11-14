# Entities

We use plural nouns when we're dealing with a collection and singular
nouns when dealing with individual items. That's obvious, but it may
not be so obvious in practice.

My rule of thumb is to

## Singular

Class names should be singular as they are used to create a single
object instance.

```java
public class User { ... }
```

## Plural

```js
users.query(...);
```

When routing in a directory to find a specific resource, the higher
level should be treated as a collection of such resource. In RESTful
APIs, for example, the url to get a single resource should pass
through a collection.

```sh
# Do
GET /users/1
GET /users
```

There was a project where I insisted using singular nouns for the high
level resource and routes to a list if needed. Not only was that
unintuitive, it also became messy as the collections grew.

```sh
# Don't
GET /user/1
GET /user/list
```

::: tip
A more specific resource should have a longer address
:::
