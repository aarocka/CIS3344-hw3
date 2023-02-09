"use strict";
function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `
    <h1>Hej this is my website dedicated to blahaj</h1>
    <p>This is a website dedicated to blahaj. I really love this shark and would like
    to share my love with the world. I hope you enjoy my website and learn a lot about blahaj.
    I will be sharing a lot of information about blahaj and how to care for them. I will also
    showing off various photos of people with their blahaj. Also there are some open source
    sewing patterns and knitting patterns for making you own blahaj and blahaj accessories.
    I hope you enjoy my website and learn a lot about blahaj.
    </p>

    <h2>Why visit my site</h2>
    <p>blahaj are the best. I love blahaj. I have a blahaj. I have a blahaj named blahaj.
    It represents a ton of people. People who like Japanese cartoons and tans rights.</p>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }