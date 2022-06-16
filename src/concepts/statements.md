# Statements

A single meaningful line that a computer would process is called a
*statement*. This is how we string keywords or operations together to
let the computer know *how* something should be done.

Let's take our maze programming language example and extend it a bit.
Instead of only having `up`, `down`, `left`, and `right` keywords which
indicates the direction, we'll add `go` and `look` to modify what we
want the program to do for a given direction.

> go up

> look left

> look right

> go up

For each line above, a computer does something with the keywords that
we provide. Done right, the computer would know what to do when we tell
it to `go up`, which would be a different action from `look left`.

## Terminator

> "I'll be back."

No, not that one.

Much like how keywords have a separator, and much like how English
sentences has a period at the end, program statements also need a
terminator to signify that the statement is complete. The most common
terminator in programming is the semi-colon (;).

> I'll be back;
