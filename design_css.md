#Designing Web Pages With CSS

- Read - 05

*__What is CSS?__*

CSS is to HTML, what chocolate is to peanut butter....or what pineapple is to pizza (ducks under thrown object).

![Yum!](https://img.buzzfeed.com/buzzfeed-static/static/2016-12/14/13/asset/buzzfeed-prod-fastlane01/sub-buzz-24232-1481739559-7.jpg)

CSS stands for Cascading Style Sheets.  It is the language that you use to style your html document.  
Html uses very basic stylings that are more for funcionality than anything else(things like different text color for links, larger font for headers, etc).
We use CSS to add style to our web pages.  That includes using different colors, borders, fonts and how all of these things interact with eacother.  We use CSS to make the layout; to make page that we build with html look the way we want it to.  

*__How Does CSS Work__*

![Stylish](https://userstyles.org/ui/images/stylish-logo-2-copy-2.svg)

- CSS is a rule based language.  We define the rules. 
- The rule opens with a selector. This selects the element that we will style.
- After the selector we use declarations - property/value.

There are also different ways to implement our CSS code.  Here are the 3 main ways.

    1. External CSS - This is CSS code that is written and stored in a separate file.  This file is linked to yur html file and must be saved with the .css extension. 

    2. Internal CSS - This can be used in the html file using the <style> element inside the head section.  

    3. Inline CSS - This is also used in the html document and can be used to stlye a single element.  Add the style attribute to the desired element.  

You can even use all 3 at once if you like! Its worth noting that any inline CSS will have the highest priority when executing followed by external/internal, then lastly any browser defaults.  

*__The World of Color with CSS__*

![World of Color](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcLNYO3DKcbxALyxQTnRgz9XaSli2l32ehw&usqp=CAU)

One of the coolest things you can do with CSS is add/change the color on your page.  You can add color to headers, backgrounds, borders, font, pretty much everything!  Not only can you add tons of color to your page with CSS, but there are many ways to do it.

The easiest way is to pick a color that is already stored in CSS.  There are 140 stored color values to pick from.  
Even those you can customize however.  If you click on the color selected you can tweak it by moving the fixed point on the spectrum.  The other methods are fairly similar and offer even more customization.  
Let's break them into 3 groups of 2. 

> Hexadecimal with/without transparency. 

> RGB/RGBA with/without opacity

> HSL/HSLA with/without opacity

The Hexadecimal is sepcified with 6 digits, and 8 digits if defined with transparency.  The values start with a # and the 6 digits represent RR(Red) GG(Green) BB(Blue)
All values must be between 00-FF with FF represting the max value.  To add transparency simply add 2 additional digits between 00-FF.  
For example if you wanted to add green you would use #00FF00
If you want to add transparency to that, you could change it to #00FF0075 for example.  

The RGB method is similar in that the RGB stand for Red Green Blue.  
Each integer used defines the intensity of the color and uses a value between 0-255.  
If you want to add opacity to your color then you use the RGA function with an added Alpha channel (RGBA)
The value used in the Alpha channel can be between **0.0**(fully transparent)-**1.0**(fully opaque)


The HSL is a different, but similar method to get your desired color.  
The letters stand for Hue, Saturation and Lightness. 
Hue is a degree on a color wheel with a value between 0-360.  0, or 360 is for Red, 120 is for Green and 240 is for Blue. 
Saturation uses a percentage value 0 percent for a shade of grey, 100 percent for the full color.  
Lightness also uses a percentage.  0 percent is black, while 100 percent is white.  
You can also use the same Alpha channel here that you use with RBGA, and it is used in the same way (a value between 0.0-1.0 at the end).





You can imagine how much you could customize your own colors!  

Click here to [Try it out yourself](https://www.w3schools.com/cssref/css_colors_legal.asp)

![Mad Scientist](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mad_scientist_transparent_background.svg/1200px-Mad_scientist_transparent_background.svg.png)

Click [HERE](README.md) to go back to the home page.





