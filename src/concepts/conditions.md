# Conditions

Let's talk about one of the common data types that we brushed over --
boolean. A boolean is simply either `true` or `false`. Despite only
having two possible values for its type, it is more used than any other
type. It is a great type to use when dealing with decisions, which most
program needs to do.

```java
boolean isLegalAge(int age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
```

In this example, we have a function that determines whether the given
age is legal or not, which we determine if the given age is below 18 or
not. If it is below 18, the age is <u>not</u> (`false`) legal.
Otherwise, it <u>is</u> (`true`).

Inside the parenthesis (`()`) following the `if` clause, there is a
statement (`age < 18`). This also returns a `true` or `false` value
when evaluated. When it is true, the code within the `if` block --
everything inside the curly brackets following `if` (`{}`) -- would
execute. Otherwise, it would execute the `else` block.

To sum it up, if the input age is below 18, that is, if `age < 18`
evaluates to true, then `return false;` statement would run. If it's
not, then the `return true;` statement would run instead.

## Equality

Operators for equality are common in languages. `<` for less than, `>`
for greater than, `<=` for less than or equal to, `>=` for greater than
or equal to. Since most language has `=` as a variable assignment
operator, `==` is used to evaluate equality. And to evaluate
inequality, a bang (`!`) is often used with it -- `!=`

- `age < 18`: is age less than 18?
- `age <= 18`: is age less than or equal to 18?
- `age > 18`: is age greater than 18?
- `age >= 18`: is age greater than or equal to 18?
- `age == 18`: is age 18?
- `age != 18`: is age not 18?

But wait! Since `age < 18` returns a boolean value already, can't we
just use it as return somehow?

Correct! The `if` statement in this case feels redundant. For this
particular case, we can just return the negated equivalent of `age <
18`. Which, instead of checking if it's below 18, let's check if it is
18 or above. 

```java
boolean isLegalAge(int age) {
  return age >= 18;
}
```

## Multi-conditional

On top of the `if-else` statement, languages can also have support for
multiple conditional statements. Commonly, there would be an `else if`
statement or what's known as a `switch-case` statement.

```js
function toOrdinalForm(singleDigit) {
  if (singleDigit == 1) {
    return "1st"
  } else if (singleDigit == 2) {
    return "2nd"
  } else if (singleDigit == 3) {
    return "3rd"
  } else {
    return singleDigit + "th"
  }
}
```

or the switch-case alternative would be something like

```js
function toOrdinalForm(singleDigit) {
  switch (singleDigit) {
    case 1: return "1st"
    case 2: return "2nd"
    case 3: return "3rd"
    default: return singleDigit + "th"
  }
}
```