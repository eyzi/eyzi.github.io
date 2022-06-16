# Functions

In mathematics, we usually deal with two values and process them. This
process could be an addition, subtraction, multiplication, etc. In
programming, these processes that we apply to a value or group of
values are called *functions*.

```java
String firstName = "Eyzi";
String lastName = "Nakagami";
String fullName = combineNames(firstName, lastName);
```

Like [variables](/concepts/variables), functions let us create keywords
that we can use when we need a particular functionality.

After processing the inputs, a function can either terminate or return
a new value. In the above example, the function `combineNames` takes in
two string inputs and returns a new string.

## Assignment

To create a function, we would indicate what inputs it takes, what
outputs it gives, and how it processes the inputs.

Note that different languages have different keywords to declare a
function. The most common would be the type of value it returns or just
the word `function`.

```java
String combineNames(String first, String last) {
  return first + " " + last;
}
```

In this example, we are simply adding the first name given , a space,
and the last name given. The `return` keyword is another common keyword
that just means to return the value of this specific statement back to
where this function is called.

Notice that the inputs are `first` and `last` which does not match the
variables from the example prior. That's because most of the time, we
don't care what the variable is, only the value that it holds. When the
value gets passed into this function, it gets assigned to the variable
that this function uses.
