# JavaScript Object Literals - The DOM

For Class 06 we read quite a bit actually, and the topics are starting to get more advanced.  You can see what we read here:[^1]

**_What is an Object?_**
- A group of variables and functions that creates a model.
- These variables and functions take on new names!
  - variables = `properties`
  - functions = `methods`
- You create an object with literal notation (well there is more than one way, but this is often viewed as the easiest).  See example below:

      let me = {
        name: 'Andres',
        age: 43,
        occupation: 'Woodworker',
        `function goes here`{
        }
      };
- You access an object using dot notation `let userName = me.name;`
- You can create more object literals by keeping the same model but using different values where the change was needed. 

We also learned about the difference between _primitive values_ and _object references_ [HERE](https://betterprogramming.pub/intermediate-javascript-whats-the-difference-between-primitive-values-and-object-references-e863d70677b)

The main takeaways for me were:
- All JS datatypes fall into one of two categories
  
  1. primitive values
  2. object references 
- both types will operate differently and return different results when compared using the `===` operator.
- the main difference between a value and a reference is that a value contains that value in itself (like a variable), and a reference is only a reference of that value.  
- the data in a value cannot be changed directly, the variable needs to be reassinged. 
- the data in a reference _can_ be changed, or mutated, since it is just a reference of the original value. 

But wait... isn't _everything_ in JS an object?         
![Hmmmm?](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmVUgTxecZtCEK3PJWbja4gdMpLZCitl2kw&usqp=CAU)

## The DOM (Chapter 5)

This chapter was on the longer side, and also the most complicated(so far at least). It is also what I have been looking most forward to studying as I feel it is what will make my projects more dynamic.  

The DOM, as I understand it, is how JavaScript can interact with the HTML document and make changes/run scripts as needed.  This is done using a DOM tree.  

DOM trees have four types of nodes:
1. document nodes
2. element nodes
3. attribute nodes
4. tag name/CSS selector

> With an element node you can update/change it's content with properties like `textContent` and `innerHTML`

> Most browsers have tools that allows one to see the DOM Tree.

### The Problem Domain

First off, I had to google what that even was lol.  If I understand it correctly, its any given thing, environment, data structure that you aren't knowledgable about, or comfortable with that is involved with a particular project you are working on.  

Im my current profession it is something I still come across, though less often than when I was first starting out.  

The [article](https://simpleprogrammer.com/understanding-the-problem-domain-is-the-hardest-part-of-programming) argues that learning the problem domain is the hardest part of programming.  

I think that since the problem domain is often what we know the least about, or are not as comfortable with, this argument makes a lot of sense.  Speaking for myself, I think it depends on the situation.  If the problem domain contains something that I am interested in then I love it!  Learning new things and taking on a challenge is something that I legitamitely enjoy.  Having said that, if the subject is not interesting to me, or worse yet, if I actually _don't_ like it then it is certainly more of a challenge.  
The author's point of view was that either way the problem domain takes us away from familiararity and thus makes us venture out of our comfort zone. While this can be uncomfortable I think that it can be a good thing for growth. 

![Growth](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6MJfA21oMWxTilBXDpAzbR3QR4VMuFmVxw&usqp=CAU)

Click [HERE](README.md) to go back to the home page.

[^1]: JavaScript & jQuery: Interactive Front-End Web Development by Jon Duckett; ISBN 978-1-118-53164-8

[Understanding the Problem Domain](https://simpleprogrammer.com/understanding-the-problem-domain-is-the-hardest-part-of-programming)

[Primitive Values and Object References](https://betterprogramming.pub/intermediate-javascript-whats-the-difference-between-primitive-values-and-object-references-e863d70677b)
