let display = document.getElementById('display_screen');
let currentInput = '';

function character(character){
    currentInput += character;
    display.value = currentInput;
}