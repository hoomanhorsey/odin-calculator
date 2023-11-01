addEventListener('DOMContentLoaded', () => {

let displayValue = [];

let clrBtn = document.querySelector('.clrBtn');
clrBtn.addEventListener('click', () => {
    console.log('cleared');
    displayValue = [];
    numArray = [];
    operator = 0;
    displayTally.textContent = "";
    displayWorking.textContent = 0;
});  

const input = document.querySelector('.input');
const operators = document.querySelector('.operators');

const numbers = document.querySelector('.numbers');

// //make operators
// for (let i = 0; i < 4; i++) {
//     const btn = document.createElement('div');
//     btn.setAttribute("class", "btn");
//     operators.appendChild(btn);
// };

// // make buttons

// for (let i = 0; i < 9; i++) {
//     const btn = document.createElement('div');
//     btn.setAttribute("class", "btn");
//     numbers.appendChild(btn);
// };


let aNum;
let bNum;
let operator;


displayTally = document.querySelector('.displayTally');
displayWorking = document.querySelector('.displayWorking');
displayWorking.textContent = 0;


// number buttons
numBtns = document.querySelectorAll('.numBtn');

numBtns.forEach( (e) => { 
    e.addEventListener('click', () => {
        displayValue.push(e.textContent);
        displayWorking.textContent = displayValue.join("");
        console.log('displayValue', displayValue);
    })
});

// operator buttons

opBtns = document.querySelectorAll('.optBtn');


let numArray = [];
let numArrayIndex = 0;

opBtns.forEach( (e) => {
        e.addEventListener('click', () => {
            operator = e.textContent;

            console.log('operator', operator);
            // to code
            //on click, get the type of operator.

                       

            if (e.textContent === "=")  {
                console.log("Calling = function");
            } else if (displayWorking.textContent ==="Display Working") {
                console.log("is empty")
            } else {
                numArray.push(parseInt(displayValue.join("")));
                console.log('numArray', numArray);
                displayValue = [];
                console.log(displayValue);

                displayTally.textContent = numArray[0] + " " + operator;

                if (numArray[1]) {
                    console.log(numArray[0], operator, numArray[1]);
                    let result = operate(numArray[0], numArray[1], operator);
                    console.log('result = ', result);
                    displayTally.textContent = result + " " + operator;
                    numArray = [];

                }
            }
            
          
            // if equals, then call relevant function, and insert value A, value B, etc etc into function
            
            // if operator is '+, -, *, or /' put the value of displayValue into a new variable, 'valueA'
            // display the operator variable in a new line on the display
            // break for new line in the display
            // empty displayValue, in preparation for new entry.

        })
});



function clear() {
    console.log('cleared');
    displayValue = [];
    numArray = [];
    operator = 0;
    displayTally.textContent = "";
    displayWorking.textContent = "";
};


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