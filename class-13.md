# HTML5 Storage

This week's reading consisted of just one article[^1], but it was packed with a lot of good information.  

There were several points during the last couple labs where I wondered:

> "How do we get the browser to save all this stuff we just worked on?

![Hmmmmm](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ci3nXFEBt9pTW4KF55XtQs2MYRDyQrQKQQ&usqp=CAU)

Our instructor gave  us an idea of just how we would be doing this for our upcoming lab, and the article on local strorage and how it has been handled over the years sheds some light on the subject.

##  _The Past, Present, and Future of Local Storage for Web Applications_

Local storage for web apps has always been an issue, and while early on in the web's history **Cookies** were invented, they fell short on a few key items.

1. They are included with every HTTP request which send unencrypted data and can slow down your application.
2. They only provide about 4kb of storage which is enough to slow things down, but not actually be useful. 

What devs needed was something that provided a decent amount of storage space, stuck around after a page refresh, and was _not_ transmitted to the server.  

Before HTML5 this was possible, but not efficient.  It involved different hacks and workarounds, but each method did not necessarily work across all browsers.  This method solved the issue, but not the cause.  HTML5 worked to solve this with their `localStorage` object.  

> What set this apart from all previous attempts at fixing the local storage issue, was that it was implemented natively _in_ the web browsers and did not need to rely on any 3rd party plug-ins.

You still should check if `localStorage` is available to your browser of choice.  To do this you could run the following code(copied and pasted from the article):

        function supports_html5_storage() {
            try {
            return 'localStorage' in window && window['localStorage'] !== null;
            } catch (e) {
            return false;
            }
        }

There are other ways to do this, but oyu get the idea. 

### Using HTML5 Local Storage

The next part of the article went over how to actually **use** the `localStorage` object.  While I understood it for the most part, the subject matter was detailed enough that I will need to reread it and really get some practice in (lab-13 maybe?).

A few important tidbits:

- `localStorage` uses key:value pairs
- This data is stored as a string.  Any dataype can be used and stored, but when you call it it will always be a string.  If you want a different datatype you will need to manipulate that when calling it.
- You can (and need to) track changes to the dom/storage with event listeners.

![Storage!](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqtwS5Uo_9A7j5NhtQHW1lVxkHx9toj2JFA&usqp=CAU)

Using `localStorage` can be useful in remembering form data, picking up a game where you left off (even after loading a different page, or closing your browser completely), etc, etc.

Click [HERE](README.md) to go back to the home page.

[^1]: [HTML5 Storage](http://diveinto.html5doctor.com/storage.html)
