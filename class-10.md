# Chapter 10 - Debugging Code

>"JavaScript can be hard to learn and everyone makes mistakes when writing it....When you are writing JavaScript, do not expect to write it perfectly the first time."[^1]

Why does it feel like the authors were looking directly at **_ME_** when they wrote that?

![You looking at me?](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxSf_k-Q1Xxvv6zcuWW1t8hEMVzkJyGlbeQ&usqp=CAU)

In this chapter we read about when things _don't_ go so smoothly when writing JavaScript.  Everyone, and I mean **everyone** will come across errors when writing code, this chapter helps to explain how to handle these errors and debug your code.  
A lot of the things in the chapter I already knew, either becuase they already seemed intuitive to me, or I had learned them in past classes.  I was excited to read about a few new things including (in no particular order):

- More console methods!  `console.info()`, `console.warn()`, `console.error()` and `console.table()` to name a few.  Its not just .log anymore!
- You can group messages together as well with `console.grou()`
- Setting up breakpoints, and conditional breakpoints (how cool is that?) can be extremely useful to step through your code via the console/devtools.
- You can even use the `debugger;` keyword to automatically set up a breakpoint from your script.
- The "try" "catch" "finally code seems especially cool and useful for testing and debugging.
- Throwing errors.  This even sounds cool in the description!  The code looks like this:

    >`throw new Error('message')`

    If you think there may be a problem with your code you can generate your own error before the interpreter makes theirs.

The console is your best friend when debugging code.  I think that this is true with html, JavaScript, or CSS.  It is already so helpful to me I can only imagine how invaluable it will be as I learn more.

It is also important to understand _how_ the code you write gets executed, or as the book puts it, the "execution context".  If you can understand this process and the order in which it runs you are that much more likely to be able to find errors in your code.

Debugging is basically problem sovling while using powers of deduction.  Use these powers to deduce if there is a problem at all, and if so where it is located, what is causing it, and finally how you can fix it!

![Sherlock](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YyoT1iURsRwfW5hXWDlGS0Ofxw3l6gYnRA&usqp=CAU)

There are 7 types of JavaScript errors, all of which will show up in your console.  Knowing these errors and what they represent won't always be clear, but it could help point you in the right direction to solving your problem.  These are:

1. `Error`
2. `SyntaxError`
3. `ReferenceError`
4. `TypeError`
5. `RangeError`
6. `URIError`
7. `EvalError`

Click [HERE](README.md) to go back to the home page.

[^1]: JavaScript & jQuery: Interactive Front-End Web Development by Jon Duckett; ISBN 978-1-118-53164-8
