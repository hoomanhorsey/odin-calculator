addEventListener('DOMContentLoaded', () => {


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


console.log(add(2, 6),
subtract(9, 1),
multiply(2, 4),
divide(16, 2))

});