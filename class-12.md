# Chart.js API

![Charts!](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfHuIshY78Q_rR7rH2QNuMZ-R5bMLWn-d-w&usqp=CAU)

This week we started to read about the JavaScript plug in Chart.js[^1].  I say _started_ to because honestly it was a bit overwhelming and felt like a wall of information coming straight at us.  There is so much information, so many methods and so much syntax to learn that this is not something that will be absorbed in the first reading.

It was however, instantly clear what made Chart.js so cool.  Once you download it, you can begin making custom pie charts, line graphs and bar charts!

To begin making these charts you start out by creating the html element `<canvas>`.  This element takes an `'id'` that you can use to access the element from the DOM.  In addition to that you set a **width** and **height** to the element which sets the dimensions.  

From here you access the DOM by declaring a variable and using `document.getElementById().getContext('2d')`.  From there you can begin to use the built in methods to make the charts such as `.pie` and `.bar`, etc.  

You can see all of this in action [HERE](https://www.webdesignerdepot.com/cdn-origin/uploads7/easily-create-stunning-animated-charts-with-chart-js/chartjs-demo.html).

Our next set of readings came from the Mozilla Developer pages[^2].

These went into **MUCH** greater detail regarding the `<canvas>` element and what we can do with it.  

You can make, for example, a  `draw()` function that you can use to draw shapes like squares, rectangles, circles and with this foundation there doesn't seem to be a limit to what you can render to your "canvas".  Reading through this reminded me a lot of the `Turtle` function in Python.  The syntax is different, but a lot of the logic is the same.  There is honestly far too much content to list here, but I look forward to reading, and learning, a lot more on this subject.

![PacMan with JS!](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqtKC2HHuQnCvkZzhiZ668S-0VUyCEPFD5A&usqp=CAU)

Click [HERE](README.md) to go back to the home page.

[^1]: [Chart.js Article](https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)

[^2]: [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)