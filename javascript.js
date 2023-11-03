addEventListener('DOMContentLoaded', () => {

// clear calculator
let clrBtn = document.querySelector('.clrBtn');
clrBtn.addEventListener('click', () => { clearCalc();});  
    
let delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', () => { del(numArray);}); 

let displayValue = [];  // array to store displayed value
let numArray = []; // array to store saved numbers for operation

let result; 
let firstOperator; // stores selected operator, once first number selected
let operator;  // stores active operator
let numberActive; // flags if number entering is active. 

const input = document.querySelector('.input');
const operators = document.querySelector('.operators');
const numbers = document.querySelector('.numbers');

displayTally = document.querySelector('.displayTally');
displayWorking = document.querySelector('.displayWorking');
displayWorking.textContent = 0;

// listener for number buttons
numBtns = document.querySelectorAll('.numBtn');
numBtns.forEach( (e) => { 
    e.addEventListener('click', () => {
        if ((displayValue.includes(".")) && (e.textContent === ".")) {
            return;  // limited to use of 1 decimal point
        } else if ( displayValue.length >10 ) {
            return;  // limits input lenght
        } else {
        displayValue.push(e.textContent);
        displayWorking.textContent = displayValue.join("");
        numberActive = true;
        }
    })
});

// listener for operator buttons
opBtns = document.querySelectorAll('.optBtn');
opBtns.forEach( (e) => {
        e.addEventListener('click', () => {

            operator = e.textContent;

            // Several conditions to determine state when operators are entered   

            // No numbers have been entered
                // no number stored or operator selected, so defaults to 0
                // operator has already been selected, so now being reselected
            if (!numberActive) {
                if (!numArray[0]) {
                    displayTally.textContent = 0 + " " + operator;               
                } else { firstOperator = operator;
                displayTally.textContent = numArray[0] + " " + firstOperator; } }
      
            // first num has been entered, but not stored
            else if ((numberActive) && (!numArray[0])) {
                firstOperator = operator;
                numArray.push(parseFloat(displayValue.join("")));
                displayValue = [];
                displayTally.textContent = numArray[0] + " " + firstOperator; }

            // first number is stored, number has been entered 
                // if operator is != '=' 
                // if operator is '='    
            else if ((numberActive) && (numArray[0])) {
                numArray.push(parseFloat(displayValue.join("")));
                if (operator != "=") {
                    result = operate(numArray[0], numArray[1], firstOperator);
                    displayTally.textContent =  `${result} ${firstOperator}`;
                    numArray = [];
                    numArray[0] = result;
                    firstOperator = operator;
                } else {
                    result = operate(numArray[0], numArray[1], firstOperator);
                    displayTally.textContent = `${numArray[0]} ${firstOperator} ${numArray[1]} =`;
                    displayWorking.textContent = result;
                    numArray = []; 
                    } 
                displayValue = [];
                }
                numberActive = false;
            })          
        })
              
function del() {
    if ((numberActive === false) || (displayWorking.textContent === "0")  )  {
        return;
    } else if (!displayValue[1]){ displayWorking.textContent = 0;
         } else {
    displayValue.pop();
    displayWorking.textContent = parseFloat(displayValue.join(""));
    }}

function clearCalc() {
    displayValue = [];
    numArray = [];
    operator = false;
    displayTally.textContent = "";
    displayWorking.textContent = 0;};

function add(a, b) { return a + b;};
function subtract(a, b) { return a - b;};
function multiply(a, b) { return a * b;};
function divide(a, b) { return a / b; };

function operate(aNum, bNum, operator) {
    
    if (operator === "+"){
        result = add(aNum, bNum);
        return parseFloat(result.toFixed(8));
    }    
    if (operator === "-"){
        result = subtract(aNum, bNum);
        return parseFloat(result.toFixed(8));
        }
    if (operator === "*"){
        result = multiply(aNum, bNum);
        return parseFloat(result.toFixed(8));
        };
    if (operator === "/"){
        if (bNum === 0) {
            return "Divide by 0? LOL!";
        } else {
        result = divide(aNum, bNum);
        return parseFloat(result.toFixed(8));       
        }};
    }
});