function handleClick(element) {
console.log(element);
element.remove();
}

function changeText(element) {
    element.textContent = 'You clicked Me.';
}

function handleMouseOver(element) {
    element.style.backgroundColor = 'rebeccapurple';
}

function handleMouseOut(element) {
    element.style.backgroundColor = 'green'
}