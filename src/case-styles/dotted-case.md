# dotted.case

Using dot (`.`) as a separator is probably the least common of all of
these. A common place you'll see this is with domains.

```
www.google.com
```

Also when working with JSON objects.

```
message.author.name
```

Another place I've seen it used is as keys in feature toggles, which is
quite smart as it resembles accessing a JSON object property.

```js
if (features.get("api.users.showPassword")) { ... }
```
