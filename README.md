css-js-timeline
===============

<h2>Timeline chart made with CSS and JavaScript</h2> 
<p>Working demo <a href="http://kopijunkie.net/lab/sp-timeline/"title="CSS and JavaScript Timeline Chart" target="_blank">viewable here</a>.</p>

<p>
    A 2013 update/refresh of a timeline chart I made back in 2010 using just HTML and CSS to lay it out as part of one of my assignments for my Web Technologies module at the University of Bristol (the original is viewable <a href="http://kopijunkie.net/demo-site/spotlight.html" title="Demo Site - Pure CSS Timeline" target="_blank">here</a>). Mach 2, if you'd like. I decided it's time to see how it can be improved on now that I have more experience working with CSS, HTML and especially JavaScript under my belt.
</p>
<p>
    One key difference is that I have now put all the band data into a JSON file that is parsed using JavaScript (I'd do it in vanilla JS, but some things are just much easier and less verbose code wise with jQuery, e.g. selecting an element by ID). When I first did this, the data was all held in the HTML itself. 
</p>
<p>
    The widths, positions of the timeline chart's bars in the original were entirely made up of hardcoded values in the CSS. In probably the biggest change, this time the widths, positions calculated dynamically with JavaScript using the data held in the JSON file. By doing this I only need to update the JSON file whilst the JS makes sure the timeline keeps itself up-to-date with each changing year (i.e. no need to update this next year just to add an extra year to the years/y-axis). Unfortunately, since there is no way to put the style values in the CSS itself (well, not that I'm aware of...feel fee to correct me as I'm here to learn also) the style attributes for the individual timeline bars' width and position had to be generated as inline styles.
</p>
<p>
    When I first made this, I wasn't very familiar with JavaScript or JSON yet plus one of the assignment requirements was that the web site I was building had to use valid HTML and CSS, no JavaScript. And as HTML5 and CSS3 were still new then, those weren't allowed either. Restricting perhaps, but I loved the challenge. 
</p>
<p>
    My aim here is to show what can be achieved with the basic front end web technologies available currently given that these days you can do quite a lot with modern front end web technologies. I'm just scratching the surface, of course. :)
</p>
