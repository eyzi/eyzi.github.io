# Loops

Sometimes you want to make a computer do something. Then do it again.
Then do it again. Then do it again. Then do i- You get the point.

Loops are yet another useful concept when you want to do anything that
requires iteration like doing something a number of times or going
through a list.

There are a few syntaxes that are common in most languages. One of them
is the `while` loop. For this, there is a condition that checks whether
the loop should be executed.

```java
int countdown = 10;

while (countdown > 0) {
  System.out.println(countdown);
  countdown = countdown - 1;
}

System.out.println("Countdown over!");
```

In this example, our `while` condition checks if the countdown is above
0. If it is, we execute the code within the `while` loop, where we
decrement countdown. Once the countdown gets to 0, the condition will
be `false` and it will break the loop.

Note that since the condition needs to be true to execute the loop, you
can create an infinite loop by simply passing the boolean `true`.

```java
while (true) {
  System.out.println("and they don't stop coming");
}
```

Another version of the `while` loop is the `do-while` loop. The main
difference is that, in a `do-while` loop, the condition is evaluated at
the end of the loop, so you can be guaranteed that the code in the loop
would run at least once.

```java
do {
  System.out.println(countdown);
  countdown = countdown - 1;
} while (countdown > 0);
```

Another common way to loop, and possibly the most popular one, is a
`for` loop. It is an evolution of the while loop, in a way. If you
notice in the `while` loop example, we created a variable that we'll
need for the condition, check the value of the variable and evaluate if
it meets the condition, and at the end of the `while` block, we do
something with the value of the variable. This is the most common usage
of the `while` loop, and the `for` loop provides a simpler form.

```java
for (int countdown = 10; countdown > 0; countdown--) {
  System.out.println(countdown);
}
```

Before you ask, `countdown--` is just a shorthand for `countdown =
countdown - 1` that most language supports. Yet another case of
programming languages providing a simpler form for a most common usage.

## Recursion

For people who are just getting into programming, recursion is one of
first mind-boggling concepts to wrap your head around.

Recursion is, for the most part, just another way to do a loop. Except,
it usually uses a function call.

Let's take the [Fibonacci
sequence](https://en.wikipedia.org/wiki/Fibonacci_number) as an
example. In this sequence, the number at any given place, is the sum of
the two numbers that came before it.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

Imagine we're creating a program that returns the number at the nth
place in the Fibonacci sequence. So if I wanted the 1st place, I should
get `0`. If I wanted the 8th place, I should get `13`.

Let's try using a simple loop to implement that.

```java
int fibonacci(int place) {
  if (place == 0) return 0;
  int n_minus_2 = 0;

  if (place == 1) return 1;
  int n_minus_1 = 1;

  int currentPlace = 2;
  int value = 0;

  while (currentPlace < place) {
    n_minus_2 = n_minus_1;
    n_minus_1 = value;
    value = n_minus_2 + n_minus_1;
    currentPlace++;
  }

  return value;
}
```

That works just fine, but let's reflect on for a bit. What do we *know*
about the Fibonacci sequence? We know that the value of the nth place
is the sum of the value of the (n-2)th place and (n-1)th place. And
finding the values of those is basically the same process all over
again, and again, and again. So why don't we create that process as a
function?

```js
function fibonacci(place) {
  return fibonacci(place-2) + fibonacci(place-1);
}
```

This is sort of a literal implementation of the process that we just
described. However, there's a big flaw. If you try to do this by hand,
you'll notice that there will *always* be a `place-2` and `place-1`, so
this process will continue forever. An infinite loop.

To prevent this, we need to tell it when to stop. A condition much like
in the `while` or `for` loop above. In recursion, we call this the
*base case*. So what should our base case be?

Well, since we're taking two previous values for each place, why don't
we use the two *most* previous values possible? That is, the `1st` and
`2nd` places. We want to say that if we're given `place` value of 1, we
will return `0` right away. Likewise, if we're given `place` value of
2, we will return `1` right away.

```js
function fibonacci(place) {
  if (place<=1) return 0;
  if (place==2) return 1;
  return fibonacci(place-2) + fibonacci(place-1);
}
```

Much better. Much cleaner. Much more correct.

::: warning
Use recursion sparingly and only when it makes sense to do so. For most
cases, `while` and `for` loops are enough, and they are also easier to
write *and* read.
:::
