# Chapter 6 - Tables [^1]

_What are tables?_ 

![table](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZ1dx5bm19PbpfiyhqZlOVGXim_2kq1JvxA&usqp=CAU)
A table is essentially a collection of data displayed in grid format.  HTML and CSS allow us to control how the rows, columns and cells are laid out and styled.  
Fun Facts:
- The `<table>` tag is what we use to add tables to a site. 
- The cells inside the table are represented by the `<td>` element and the rows by the `<tr>` element.  
- If the tables are long and contain a lot of data you can break the table into sections using the `<thead>`, `<tbody>` and `<tfoot>` elements.  

Programmers used to use HTML to control more of the layout, background and spacing of tables but that is no longer considered good practice.  It is good to learn it however so that you can recognize it if you come across it.  Like with most other elements, CSS is what is used to style tables these days.  

## Chapter 3: Functions, Methods and Objects [^2]

For this week's reading we finished up chapter 3 which in my opinion, has been the most interesting one to date.  We learned more about objects, how to construct them (literal and constructor) and how to add, remove and replace the data held within.  We learned that you can make an empty object with parameters so these "empty" variables can be filled later.

> "Something tells me our next lab might have something to do with this?"

With `Objects()`, the variables inside are known as `properties` of the object, and if the function is placed inside the object, it is known as a `method`.

_Did you know?_

- Arrays are actually objects as well?
- JavaScript has built in objects that can help us such as:
    
    1. `String`
    2. `Number`
    3. `Math`
    4. `Date`

We also learned about learned about the **3** groups of built-in objects.  

These are the _Browser Object Model_, the _Document Object Model_ and _Global JavaScript Objects_.  

The **D**ocument **O**bject **M**odel, or **DOM** being the most interesting, or at least the most petinent one for us so far.  The **DOM** is what we use to access and manipulate the  "document" or, the webpage with JavaScript.  

### Domain Modeling

Our last bit of reading was from one of our very own #CodeFellows repositories!  You can find the original source [HERE](https://github.com/codefellows/domain_modeling#domain-modeling).[^3]  

The article goes into detail on why one would want to make a domain model, as well as how to go about getting started.  The example used is a hypothetical case where your boss has tasked you with creating a program to determine the popularity of "epic fail videos".  The assumption is that the research has already been done and you are ready to write the program.  The key takeaways were:

- If the point is to have many instances then its best to build objects with the same behaviors and attributes.  
- Make the methods short, simple and very good at the one thing you design the for.  
- To make new instances, use the `new` keyword
- Store the information in variables so you can access the data from outside the object
- Use the `this` keyword so you can access the object's data from the inside.

Something tells me that we will be learning a __lot__ more about this subject and I cannot wait. 

Click [HERE](README.md) to go back to the home page.

[^1]: HTML & CSS: Design and Build Websites by Jon Duckett; ISBN 978-1-118-00818-8

[^2]: JavaScript & jQuery: Interactive Front-End Web Development by Jon Duckett; ISBN 978-1-118-53164-8

[^3]: Contributors Ryan Sobol, Sam Hamm and Keli Hansen