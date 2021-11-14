# snake_case

Another common separator is the underscore (`_`). It's a symbol that
looks the closest to a space. Often used with
[lowercase](/case-styles/lowercase).

This is usually used when the evaluator is case insensitive where it
would be confusing to use [camel case](/case-styles/camel-case), such
as in APIs. You'll find body properties often in snake case.

```
GET https://movies.db?exclude_genre=horror,comedy
```

## `UPPER_SNAKE_CASE`

As mentioned before, the [uppercase](/case-styles/uppercase) can be
used for keywords whose values will never change, also known as
constants. An underscore can be used as a separator for it when
multiple words are involved. This is sometimes called the upper snake
case.

```js
const HOURS_IN_A_DAY = 24;
```

## double\_\_snake\_\_case

Another common variation is using two underscores between words. Just
another way to separate words or group of words.

```
protip__do_this_sparingly
```
