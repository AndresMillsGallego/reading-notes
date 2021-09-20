# Dynamic Web Pages With Javascript

- Read-06

**What is Javascript?**

Anyone else in the mood for a cappuccino?

![coffee](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/640px-Cappuccino_at_Sightglass_Coffee.jpg)

Javascript is a programming language that can be used to add function to your page and make it *work* the way you want. 
Even though they sound similar, don't confuse Javascript with Java.  They are both programming languages, but use different syntax, semantics and do different things!

Javascript (or, JS for short) is both simple and complicated.  It is beginner friendly, but also confusing.  
In these notes I will go over a bit how JS works.  

## Variables

Javascript uses variables as containers that hold values or data.  There are 3 ways to declare, or create, a variable.  

- var
- let
- const

The **var** keyword is one that isn't really used anymore, but its good to know since you will come across it.  
The **let** keyword declares a variable that can be changed, or reassigned at any point
The **const** keyword is used to declare a variable that will remain constant and will not change.  

After declaring, or creating, the variable, you can give it a value.  Foor this we use the = sign which assigns a value to a variable.  
After we assign a value to a variable we can then change it later using the = sign again.  

    > let theBoss = "My supervisor"
      theBoss = "Bruce Springsteen"

You can see that we declared the variable first, then assigned a value, then changed the value.  
Its even possible to declare a variable with no value at all!  This is done when the value is not yet known, or needs to be calculated.

So what do we put in as our values for these newly declared variables?

### Data Types

Here are some of the data types that we can use as values for our variables.

| Variable | What It Does |
| :---: | :---:
|String | Letters or numbers.  Use quotation marks to wrap your text |
|Object | This can be anything!  Everything in JS is considered an object |
|Boolean | This is a value of true, or false.  These values don't need any quotation marks|
|Number | Any number or integer.  Make sure not to use quotation marks here, or the data type becomes a string |
|Array | This allows storing several values in one reference |

Its important to know how to declare variables and what data types they can hold.  Variables are so important in programming as they are what let us change and customize how a web page works, and how the user experiences it. 

What else can we do with variables?  We can use operators! 
Operators are essentially math symbols that we use with 2 or more values.  

- addition is used with the + sign
- subtraction is used with the - sign
- multiplication is used with the * sign
- division is used with the / sign

So.....following this logic then equals to must use the = sign right?
Not so fast, we already use the = sign to assign our values to our variables remember? 😄

For equals to we use == or ===.

== converts the variable to the same data type
=== keeps the data types the same

If we want to express *not* equal to, then we use either ! or !==

#### Conditionals

Conditionals are what we use to test if something is going to return true or not. A common conditional code is the "if"..."else" statement.  
The "if" expression tests to see if the returned value is true, or false.  
If the return is true, then the first code (the "if") executes. 
If false, then the second code (the "else") executes.  For example:

    if (theBoss == "Bruce Springsteen) {

    return ("Sweet!  I love the Boss!!!!!!");    
    } else {
    return ("Awwww man, Tony Danza is NOT the Boss.")}

![The Boss](https://cdn.shopify.com/s/files/1/0580/0973/products/Bruce_Springsteen_The_Boss_2048x2048.jpg?v=1475695367)

There is a lot more to Javascript of course, but this is a good start to how it works and what it does! 

Click [HERE](README.md) to go back to the home page.


