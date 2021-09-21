# Control Flow

Control flow is simply the order in which your computer will execute the code in a script.  
This is always done in order from the first line, to the last....except  where it runs across something that changes the Control Flow.  

These can be bits of code like **conditionals**, **loops**, and **functions**.

## Functions

A JS function is code that is designed to perfom a task.  This task is executed when the fucntion is called (or activated).

![Syntax](https://akorbi.com/wp-content/uploads/elementor/thumbs/shutterstock_1379004161-p0w094313xxpvbxp3fusdf6eqlmj8rj3ckphkngx9s.jpg)

The syntax that we use to create this is the *function* keyword followed by a name (usually describing the function) and parentheses.  Inside the parentheses go the parameters which can be separated by commas if there are more than one.  You can also leave the parentheses empty if the function doesn't require any parameters.  To finish it off we place the code we want to execute inside a pair of curly braces.  

    function sqFootage(w, l) {
        return w * l;  
    }
    // This function will return the values of w and l multiplied together. 

The () operator is what makes it a function!  If you try to call the function without the parentheses then the object name is all that will return.  You have to include the () to call the actual function.

When JS reaches a **return** statement it will stop right there. 

A function is called when:

- An event occurs on the page
- When it is called from inside of the JS code
- Automatically (self invoked)

Functions can also be used as variables!  We don't have to store the results of a functin into a separate variable, we can just use that function *as* the variable.

Speaking of variables.....We can actually have variables that are only available form within the function!  These are called local variables and can only be accessed from with the function. 

So why use functions?  Can't we just write the code out normally?

Functions are useful as they allow us to reuse code, many times in fact when necessary.  We can have the same function, but change the parameters so get different results.  They are a very efficient and useful tool.

### Operators

![operator](https://smileandgun.files.wordpress.com/2016/04/women-telephone-operators-at-work-12.jpg)

JS uses many different operators, but here we will go over 3 of them. 

**Assignment Operators**

- The assignment operator assigns a value to a variable.  

This is done with the = sign (as we've mentiond in past notes).

    let theBoss = "Bruce Springsteen";

**Arithmatic Operators**

- Arithmatic operators are used to perform arithmatic on numbers (and sometimes strings as well)

Here is a table of some of them and what they do:

| **Operator** |  **What it Does** |
| :---: | :---:  |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| ** | Exponentiation |
| / | Division |
| % | Division Remainder |
| ++ | Increment |
| -- | Decrement |

I said that you can (sometimes) use arithmatic opoerators on strings as well!

You can use the **+** operator to add together (concatenate) multiple strings.  

    console.log("The real boss around here is " + theBoss + "!!!")
    //will print "The real boss around here is Bruce Springsteen!!!"

**Comparison Operators**

- Comparison operators are used to determine equality or difference between multiple values and/or variables.  

Here is a table of some of them and what they do:

| **Operator** | **What it Does** |
| :---: | :---: |
| == | Equal to |
| === | Strict equal to in value and type|
| != | Not equal |
| !== | Strict not equal in value or type |
| > | Greater Than |
| < | Less than |
| >= | Greater than, or equal to |
|<= | Less than, or equal to |

*How are they useful?*

Comparison operators can be used in conditional statements to compare values.  

The action that follows the comparison can vary based on the result! 

There is a lot more of course, but this is a good place to get started.  

Click [HERE](README.md) to go back to the home page.