css-js-timeline
===============

Timeline chart made with CSS and JavaScript

<p>
    This is an update/refresh of a timeline chart I made back in 2010 as part of one of my assignments for my Web Technologies module at the University of Bristol. Mach 2, if you'd like. After 2+ years working as a Front End Web Developer, I decided it's time to see how it can be improved on now that I have more experience working with CSS, HTML and especially JavaScript under my belt.
</p>
<p>
    One key difference is that I have now put all the band data into a JSON file that is parsed using JavaScript (I'd do it in vanilla JS, but some things are just much easier and less verbose code wise with jQuery, e.g. selecting an element by ID). When I first did this, the data was all held in the HTML itself. 
</p>
<p>
    The widths, positions of the timeline chart's bars in the original were entirely made up of hardcoded values in the CSS. In probably the biggest change, this time the widths, positions calculated dynamically with JavaScript using the data held in the JSON file. By doing this I only need to update the JSON file whilst the JS makes sure the timeline keeps itself up-to-date with each changing year (i.e. no need to update this next year just to add an extra year to the years/y-axis). Unfortunately, since there is no way to put the style values in the CSS itself (well, not that I'm aware of...feel fee to correct me as I'm here to learn also) the style attributes for the individual timeline bars' width and position had to be generated as inline styles.
</p>
<p>
    When I first made this, I wasn't very familiar with JavaScript or JSON yet plus one of the assignment requirements was that the web site I was building had to use valid HTML and CSS, no HTML5 or CSS3 was to be used. My aim here is to show what can be achieved with current front end web technologies, which these days is quite a lot. I'm just scratching the surface, of course. :)
</p>