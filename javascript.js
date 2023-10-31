addEventListener('DOMContentLoaded', () => {

const displayValue = [];



const input = document.querySelector('.input');
const operators = document.querySelector('.operators');

const numbers = document.querySelector('.numbers');

//make operators
for (let i = 0; i < 4; i++) {
    const btn = document.createElement('div');
    btn.setAttribute("class", "btn");
    operators.appendChild(btn);
};

// make buttons

for (let i = 0; i < 9; i++) {
    const btn = document.createElement('div');
    btn.setAttribute("class", "btn");
    numbers.appendChild(btn);
};


let aNum;
let bNum;
let operator;

console.log(operate(6, 7, "*"));


display = document.querySelector('.display');

// number buttons
numBtns = document.querySelectorAll('.numBtn');

numBtns.forEach( (e) => { 
    e.addEventListener('click', () => {
        displayValue.push(e.textContent);
        display.textContent = displayValue.join("");
        console.log(displayValue);
    })
});

// operator buttons

opBtns = document.querySelectorAll('.opBtns');

opBtns.forEach( (e) => {
        e.addEventListener('click', () => {
            // to code
            //on click, get the type of operator.
            // if equals, then call relevant function, and insert value A, value B, etc etc into function
            
            // if operator is '+, -, *, or /' put the value of displayValue into a new variable, 'valueA'
            // display the operator variable in a new line on the display
            // break for new line in the display
            // empty displayValue, in preparation for new entry.

        })
});





function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(aNum, bNum, operator) {
    
    if (operator === "+"){
        return add(aNum, bNum);
    }    
    if (operator === "-"){
        return subtract(aNum, bNum)};

    if (operator === "*"){
        return multiply(aNum, bNum)};

    if (operator === "/"){}
        return divide(aNum, bNum);
};


});