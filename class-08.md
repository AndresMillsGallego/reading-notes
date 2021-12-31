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
 







Click [HERE](README.md) to go back to the home page.

[^1]: [CSS and Layout Article](https://web.dev/learn/css/layout/)

[^2]: HTML & CSS: Design and Build Websites by Jon Duckett; ISBN 978-1-118-00818-8