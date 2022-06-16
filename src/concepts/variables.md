# Variables

Possibly the most common programming concept is the concept of values.
Values can be text or numbers that you can think of. What is your name?
What is your age? The answers to those questions are their *values*.

You can think of variables as a named box for a value. That is the
"name" in the question "What is your name". If someone asks me "What is
your name?" I would answer "Eyzi". In this case, **name** is the
variable and **Eyzi** is the value.

If you're making a fighting game, you might want to have a variable for
**player health**. If so, you would use a variable accordingly.

Some types of values that are built into the language, often called
*primitive values*, are characters (letters), numbers, boolean (true of
false), or a collection of any of these. 

## String

A single character usually counts as a single value. A text, then, is
treated more like a collection of characters. This collection is most
commonly referred to as a **string** in the programming world.

When we refer to character or string values, we usually enclose them in
quotation marks to differentiate it from a
[keyword](/concepts/keywords). For example,  if a programming language
reserved `quit` to exit the program, we can use `"quit"` to let the
computer know that this should be treated as a text value and not ran
as a keyword.

## Constants

Constants are also named boxes of values, except these are usually
values that will never change. For example, minutes in an hour.

These are not restricted to universal values. There may be some
constants that are specific to your application. Life, if you are
creating a todo app and you know that you will ever need "TODO" and
"DONE" states, they can be set as constants as well.

## Assignment

Assignment is a statement that attaches a value to a variable.
Languages have an assignment operator that handles this. Usually it's
just the plain old equality symbol (=).

```js
name = "Eyzi";
```

Doing this, we <u>create</u> our own . One
that is not built into the programming language but we can use for our
own purposes. We can now use the keyword `name` wherever we need it.

## Types

As mentioned above, there are what's known as primitive types. In some
languages, you may need to specify the type when creating a variable.

```c
int age = 9;
```

`int` in this case is short for `integer` so the computer knows that
they variable `age` is of type number.
