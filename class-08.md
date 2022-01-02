# CSS - Layout
We began this class's reading assignment with this article[^1].  The article talks about how in the early days of the web a lot of the "layout" was handles with the `<table>` element directly inside the HTML document.  As time went on developers needed more to keep up with the advancing technology. See the timeline below (taken from the linked article).

![CSS Layout](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/vDDoFFoPVgJEuEaqcP4H.svg)

Modern day CSS can be an extremely versatile and powerful tool, something we learned first hand with this week's lab-07.  Here are a few things that were discussed in the article.

- `display:` this property mainly is used for two things:
  
  1. Determines if the box (remember everything is considered a box in CSS) it is applied to will be inline or block.  Block elements are displayed top to bottom each on a new line.  Inline elements are displayed next to eachother on the same line. 
  2. This also used to determine how the children of an element will behave.

- **Flexbox** This is used as a layout mechanism for one-dimensional layouts. `align-items`, `justify-content` and `flex-wrap` are all properties used by flexbox.

- **Grid** Is kind of like flexbox, but it is designed for multi-axis layouts.  `repeat()` and `minmax()` are functions that are used with Grid. The `fr` is a particularly useful grid unit that represents a fraction of the remaining space.

- **Flow Layout** This is what is used if you don't specify flexbox or grid. Some properties that you can use with this layout are:
  - `inline-block:` Lets you use a block type element that flows like an inline element.
  - `float:` This is useful for positioning images in a way that lets text flow around it.  You can float an element `left`, `right` or `inherit`, but careful...this can mess with your overall layout and the float can sometimes need to be cleared. 
  - **Multicolumn Layout** This can be useful if you have a _really_ long list of items to display.  You can split these items into columns using `column-count:` or `column-width:` properties.
  - **Positioning** This mechanism can control how an element changes position in relation to the normal flow of the document. For this you use the `position:` property and it can be set to `absolute`, `fixed`, `sticky` or `relative`.  With these values you can use the `top`, `bottom`, `left` and `right` values as well to control where they are positioned.

That about does it for this assignment.  As a lover of all things CSS I loved this article!

## Chapter 15 - Layout

Our textbook reading was....(drumroll).....more about CSS![^2] You will get no complaints from me.  Looking back [here](class-04.md) where I read this chapter for the first time, even then I had the feeling I would be reading this again!  

After reading through it a secomd time the points that stuck out the most were:
  
  1. Using layout to postition where you want items to display on your page.
  2. What **fixed width** and **liquid layouts** are, as well as how and when to use them.  
  3. Using a _grid_ layout to format a page.  The **960px** grid system is one that is widely used.  
  4. CSS Frameworks like the 960.gs can be beneficial to format a page.  These frameworks can keep you from rewriting the same code over and over again, but can also be limiting and force you to use class names in your html whether you like it or not.  
  5. You can link several CSS files on the same html page.

![Layout Design](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7-IuurWrKiJKJXa5V0HCDXLxcDqYNgg8Xg&usqp=CAU)

I learned firsthand how versatile, useful and potentially confusing CSS can be in setting the layout to a page.  What I really found interesting was the difference between fixed and liquid layout.  For example, I coded my Salmon Cookies page on my PC which uses a 27" screen, it looked fantastic and rendered exactly how I pictured it would.  Then, opening the exact same page on my laptop, which uses a 14" screen, it still looked good, but it did not render how I had envisioned.  Going back to my About-me project, it did seem to stretch to fit the screen as I had inteneded.  After reading this chapter I would like to go back and see how I coded the CSS for both pages, and see what I can adjust and refactor in my Salmon Cookies code so that it renderes to fit the screen better.  

 Click [HERE](README.md) to go back to the home page.

[^1]: [CSS and Layout Article](https://web.dev/learn/css/layout/)

[^2]: HTML & CSS: Design and Build Websites by Jon Duckett; ISBN 978-1-118-00818-8