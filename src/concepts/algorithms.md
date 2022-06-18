# Algorithms

Ah, yes. The million dollar word. People overuse this word and even
non-programmers are probably sick of hearing it already. But there are
reasons why it's so commonly used. The concepts that have been covered
until now are what I would call the *soft concepts*. They are necessary
for programming, but they don't do much individually. Algorithms is
where the actual *programming* starts.

I mentioned [before](/about/what-is-programming) that programming is
like writing a recipe for the computer to follow. That list of
instructions to follow is what an algorithm is, except more
mathematical in a sense.

As an activity to understand it better, let's consider a
[Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher). This is a
simple way to create a "secret message". Basically, each letter in a
message is replaced by the letter three steps to its left in the
alphabet circularly. 

For example, `ROAD` becomes `OLXA`.

Hopefully, that's easy enough to understand. When we know *how* it
should be done, we now need to create precise steps for it. A version
could go something like:

```
1. Consider the first character of the message as the "current
    character".
2. If the current character is not a letter, skip to step 4.
3. Otherwise, if the current character is a letter, replace it with the
    letter three steps to its left in the alphabet where the step to
    the left of "A" is "Z".
4. If there is a next character in the message, consider the next
    character as the "current character" and repeat from step 2.
5. Otherwise, the message has been encrypted.
```

There's an algorithm for the Caesar cipher.

See how we've used a few of concepts we've covered previously? We have
assigned a value to the "current character" variable. We have evaluated
conditions. We looped through instructions.

This is more or less how programming works. Given a problem, you come
up with a way to write instructions for it. Write it in a language
understood by the computer. Tada! You're now a programmer.

The problems get harder and there are more techniques you can learn on
particular types of problems, but as long as you know the basic
concepts and have enough time, you can solve any problem that comes
your way! 

## Pseudocode

Pseudocode is when you write an algorithm without following any strict
rules of a specific language. Just in plain English so you wrap your
head around the instructions. The algorithm example we have is a good
example of a pseudocode.

It's generally a good idea to work with pseudocode first while trying
to wrap your head around the problem or playing around with solutions
or instructions. Having an understandable list of steps can help with
the actual coding part, also known as implementation.
