# HTML Chapter 7 - Forms

![Forms!](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElChImiwHHzLCcat2yOCjTDXGQSmPwYgrNA&usqp=CAU)

We started off this weeks reading in our HTML[^1] book.  The first chapter we tackled was chapter 6 and the subject was forms.  

Forms are what we use in HTML when we need to collect data/information from a user.  This all is contained in the `<form>` element.  

_How do forms work?_

The user enters their information into the form which upon the press of a button is sent to a server.  This information is processed, then the server can send back a new page to the browser that is based on the information provided!

- Form information is stored and sent in name/value pairs. 
- The form control is given a name and the information the user types is the value. 
- HTML5 has introduced new elements which can make it easier for users to fill in forms.  

The `<form>` tag can work with other tags such as `<input>`, `<select>`, `<option>`, `<button>`, `<label>`, `<fieldset>` and `<legend>`.

## Chapter 14 - Lists, Tables and Forms

HTML can make the forms of course, but we need CSS to make them _look_ **goooooood**.

![CSS](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp958CX77Sgz1LjQc97Q04b0Ra3ZdFY9w7LQ&usqp=CAU)

CSS is used to style the layout, color and overall design of the 3 elements listed in this chapter just like any other `<html>` element.  CSS does have a few properties however that are made just for __lists__, __tables__ and __forms__.

- Markers for lists can have their appearance changed by using the `list-style-type` and `list-style` properties.
- You can do a lot with tables and table cells as well.  The margins, padding, border-colors, background-colors and headers can all be styled to look good and professional using CSS properties.  
- Forms are easier to use if everything is symmetrical and lines up.  CSS is an excellent tool for achieving this.  
- Forms aren't fun, the more interactive and nice looking you make them the higher the chance the user will fill them out!

### JavaScript Chapter 6 - Events

Next up was this chapter from our JS book[^2].  If I am being honest I was a bit tired when I got to this chapter and I skimmed it a bit.  Having said this, after the DOM, this is one of the things I am most interested in learning!  To me it is the next natural step in the ability to make interactive web pages.  You can not only make something happen, or write then run a script...but you can decide _how_ and _when_ it happens!

![Events!](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJM_ZBuM4e7FePLzKQ_Fx17sx7U0w6fDRGA&usqp=CAU)

Here is a basic model of how events are handled.

>- Select the `<element>`
>   - Specify the event you want
>     - Call the code!


A few things I picked out while skimming.....

1. Events are how the browser shows _when_ something has happened.  
2. Binding is when you couple the element you want the focus on with the event that you are waiting for.  
    > There are 3 ways to bind an event to an element(well only 2 really, as the HTML Event Handler method is no longer recommended)
    >The two you _could_ use are traditional DOM event handlers, or the more frequently used DOM level 2 event handlers. 
3. JavaScript!!  Finally a way to link scripts and functions to certain events.  Key strokes, submit forms, clicks, you get the picture. 
4. You can monitor the events on a particular element, as well as all the children of said element!

I have a feeling we will be coming back to this chapter soon.  Even if it isn't assigned in the reading I will most certainly coming back for another read through (probably several if I am being honest).

Click [HERE](README.md) to go back to the home page.

[^1]: HTML & CSS: Design and Build Websites by Jon Duckett; ISBN 978-1-118-00818-8

[^2]: JavaScript & jQuery: Interactive Front-End Web Development by Jon Duckett; ISBN 978-1-118-53164-8