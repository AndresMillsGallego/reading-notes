# Operators and Loops

In my last reading notes we started to talk about some of the different operators that javascript uses.  Here we will continue that discussion.  

- Unary operators - require a *single* operand either before, or after the operator
    > delete and typeof are examples of unary operators
- Binary operators - require *two* operands, one before and one after the operator
    > logical operators like AND( && ) and OR( || ) are examples of binary operators
- Conditional operator - the only JS opeprator that requires 3 opperands.  This can have one of two values based on a condition.  The syntax is as follows:
    > condition ? val1 : val2

*__Interesting Fact__*

- An expression in javascript is any unit of code that becomes a value.

![expression](https://www.kindpng.com/picc/m/189-1890405_actor-png-hd-theatre-masks-transparent-png.png)

Javascript has the following categories of expressions

- arithmatic
- string
- logical
- primary
- left hand side expression

We can talk further about these in future notes.  

## Loops

![loops](https://bjs.scene7.com/is/image/bjs/3841?$bjs-Zoom$)

No, not those loops! 
We are talking about the loops that we use in Javascript 😃

*So what do they do?*
Basically they are a way of repeating an action a certain number of times(We have to be careful too place a limit, otherwise it could go on forever!)
The number of times can even be zero! 
Loops offer us a quick and easy way to do something with code repeatedly. 

The various loop mechanisims allow for different ways to determine the start and stop point of a loop.  

The two we will focus on here are the **for** and the **while** statements.  

**for**

- The for statement repeats until a specific condition evaluates to false. 

That looks something like this:

    for (initial statement, condition statement, increment statement) {
        code to be executed
    }
**while**

-The while statement executes its statements *as long* as a specific condition returns true.

That looks something like this:

    while (condition)
        statement

It is important to make sure the condition loop has an end in sight (eventually return false), otherwise the loop will go on forever and could crash your browser.  This is true with any loop that you may use. 

![thats all folks](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/1019px-Thats_all_folks.svg.png)


Click [HERE](README.md) to go back to the home page.
