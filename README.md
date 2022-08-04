# Hydr098.github.io
This is the webpage of term project for CS601 Summer 2022.

### Top nav bar 
It contains 6 elements, first 4 directly navigate to different part of this website. The 5th goes to the URL link of my Linkedin account and the 6th one is Github account.

### About Me
Mainly describe myself: what I'm doing and what I intreseted. 

### Research Projects and Experiences
Descirbe all experiences and followed the coresponding link to the Github repo. 

### Personal CV
Here, I used **VUE** in js file and there are 2 buttons with different style when hover mouse on them and click effects that can hide the CV infomation or show the CV information. And the "Download CV" button could automatically download the pdf file.
Here are the js codes: 
```
var app = new Vue({
    el: '#app',
    data: {
      isHidden: false
    }
  })
```

### Contact information
In the Phone slot, the button Copy the Number could auto copy the number to clipboard and generate an alert. Here is the js codes:
```
function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
    alert("Copied the number.");
 }
 ```

You can also fill the form below and submit it to **database or other API**.