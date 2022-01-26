# CSS Transforms, Transitions, and Animations

For this reading we focused on CSS and read a variety of articles.  The first article was on the `transform:` property.  I had used this a bit before, but didn't fully understand how it worked.  You can use this property to rotate an object, change the angle to offset it, etc.  It is a good idea to use `-webkit-`, `-moz-` and `-o-` in addition to the property to make sure it is accepted across all browsers.  Honestly, after seeing these demos the first thing that came to mind was that scene in Superman 2 where the villains were trapped in the element floating off into space.....[^1]

The `transition:` property is similar to the `transform:` in that it targets the element and changes the appearence.  It can be used to softly transition the color, shape, size or even the shape of a particular element.  I have used it to rotate a button element while transitioning the background to a different color.  It is worth noting that not all properties can be transitioned, only those that have a identifiable half way point[^2].  You can set the timing, duration and delay for a given transition.

It seems like the `transition:` property is fairly simple to implement.  Check out this [article](https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users) for some examples of the `transition:` property in action.  

> Check out these links for more examples of animated elements using CSS and `transition:`

- [Buttons](https://codepen.io/retyui/pen/ByoaXV)
- [Keyframes](https://codepen.io/akshaychauhan/pen/oAfae)
- [h1 404](https://codepen.io/kieranfivestars/pen/MYdQxX)
- [Pure CSS Bounce](https://codepen.io/dp_lewis/pen/gCfBv)

As you can see there is a ton that you can do with just CSS by itself, or in addition to your other code.

Click [HERE](README.md) to go back to the home page.

[^1]:[Transform](https://learn.shayhowe.com/advanced-html-css/css-transforms/)

[^2]:[Transition](https://learn.shayhowe.com/advanced-html-css/transitions-animations/)