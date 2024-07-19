// syntax of querySelector
// const <variable_name> = document.querySelector ("css-selector")
// its good to console log to make sure it works.

const title = document.querySelector('h1');
console.log(title.textContent);

// to change words in the html
title.textContent = "WOW SO COOL"

// to change the color or style of the text
title.style.color = 'blue';


// event attribute listeners
// to call functions

// this changes the text altogether 
function changeIntroText() {
    const introParagraph = document.querySelector("#intro")
    console.log(introParagraph);
    introParagraph.textContent = 'This has been changed!'
}


// This changes the background color to yellow
function highlightButton(element) {
    element.style.backgroundColor = 'yellow';
}


// incrementing numbers in text
function incrementBoops(id) {
    console.log(id);
    const boopSpan = document.querySelector('#' + id);  // the literal string added to the id name
    // console.log(boopSpan);
    boopSpan.textContent++;
}
// You can not just input this function for the rest to increment too.  You must give them an (#id)