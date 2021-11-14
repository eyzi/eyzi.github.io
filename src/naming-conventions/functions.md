# Functions

Naming functions generally share a lot in common as naming variables.
Though, given that functions _do_ things, a good practice when naming
them is to use verbs.

```js
function createUser(name) { ... }
```

If the function returns a `true` or `false` value, the tip from
variables applies.

```js
function isUserActive(user) { ... }
```

## Get/Set

A very common habit is prefixing function names with `get` for
retrieving values and `set` for assigning values. It aligns with the
namin convention but I would still label it as borderline bad practice.

```js
function getUserById(id) { ... }
function setVerticalPosition(value) { ... }
```

I would encourage people to find a better verb than `get` or `set` if
they can help it, but those are truly the best verbs to use, then by
all means.

```js
function retrieveUser(id) { ... }
function raise(value) { ... }
```
