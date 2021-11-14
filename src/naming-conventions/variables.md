# Variables

A variable holds a value. That's it.

Generally, the name you give a variable should describe the value it
contains.

```js
var name = "Sohn Jmith";
var age = 69;
```

It gets a bit tricky when dealing with variations of the same concept.

```js
const name = "Sohn Jmith";
const name2 = "Sohnny";
const nameButWithLastNameInitialed = "Sohn J.";
```

In that case, fight the urge keep adding numbers or adjectives.
Instead, take a step back and try to come up with a new, better term
for the new concept.

```js
const name = "Sohn Jmith";
const nickname = "Sohnny";
const shortName = "Sohn J.";
```

## Values

Try to make it easy to guess what the type of value is from the name
too.

```js
// BAD
const paid = true;
const paid2 = 1245.5;
const paid3 = "Sohn Jmith";

// GOOD
const isPaid = true;
const paymentAmount = 1245.5;
const payee = "Sohn Jmith";
```

::: tip
For boolean variables (ie, variables that contains either `true` or
`false`), prefix the variable with `is`, `has`, or `should`.
:::

## Constants

When you know a value will never change, it is a good idea to use a
different case style for it. Generally, an
[upper snake case](/case-styles/snake-case.html#upper-snake-case) is
recommended.

```js
const WHITE_COLOR_HEX = "#000000";
```
