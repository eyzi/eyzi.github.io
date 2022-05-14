# camelCase

The most ubiquitous case style in the world of programming is the
camel case.

Imagine this: You are writing in lowercase and you have to type a group
of words as a single keyword. You can't use space as it is used to
separate keywords. You also can't use symbols. What do you do?

Here's an idea: What if you use capitalization, not as emphasis as it
is usually used for, but as word separator.

```txt
justLikeThis
```

Problem solved.

Since programmers are often bound to the same constraints mentioned
above, especially when naming variables and function names, it's easy
to imagine why programmers use it a lot, especially for variables and
function names.

```js
function calculateAreaOfCircle(radius) { ... }
```

## PascalCase

A variation of the camel case except the first letter is also
capitalized. It sort of has the same effect as the
[title case](/case-styles/title-case). As such, it is used when the
keyword needs to be distinct from the usual variable naming style, such
as a class name.

```js
class UserAccount { ... }
```

In programming languages like C#, it is a convention to use pascal case
for variables in general. Consult your local tech lead to know when you
should be using pascal case.

## Acronyms

We usually uppercase acronyms in a sentence, such as URL, HTTP, etc.
As such, people do so in camel case as well.

```js
function parseURLString(url) { ... }
```

While it's easy to make out that `URL` is a single word here, you can
imagine how difficult it is to make out when a word starts and ends.
Especially when it's a word you are unfamiliar with. And what happens
when there are two acronyms?

```js
function getHTTPAPIMethod(request) { ... }
```

I like to treat the entire string as lowercased, then capitalize the
beginning of each word, including acronmys. I just find it better to
read that way.

```js
function parseUrlString(url) { ... }
function getHttpApiMethod(request) { ... }
```

This is obviously up to personal taste. Keeping acronyms all-caps in
camel case is perfectly acceptable. The *only* acceptable way in some
teams, even. Just remember the [platinum rule](/about/platinum-rule).
