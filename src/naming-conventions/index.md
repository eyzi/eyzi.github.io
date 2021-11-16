# Introduction

Personally, I find naming quite hard in general. It is easy to smash
the keyboard and let fate construct a name but, as with
[case styles](/case-styles/), not giving thought to this can cause
headaches when reading codes.

Not only do you need to find the right words to make your variables
descriptive, they also need to be concise. When you reuse a concept
over and over in your code, at some point, you'll run out of ways to
convey the same thing in a unique way.

```
📄 final.doc
📄 final2.doc
📄 final-final.doc
📄 actual-final.doc
📄 ASASFDADSF.doc
📄 final-real.doc
```

## Being Descriptive

While you don't need to have the vocabulary of a poet, it would
probably help a lot if you do. Naming anything precisely so that other
people understands, not only what it does, but also what it does not do
can be really helpful.

There are some words that has become common in programming.

```js
start();
getName();
createApp();
generateUser();
buildOrderFactory();
```

> No, you do not "generate" a user

It makes sense for the most part, and maybe it conveys the right
thought to whoever is reading it, but it can still be a cause of
misunderstandings.

You'll also find yourself adding more words when trying to be more
specific. Sometimes it slowly becomes an unnatural sentence.

```js
blockLoginRequestNoOauth();
```

The art is to keep it to read as a normal phrase while being concise.

```js
restrictLogin();
```
