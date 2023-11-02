addEventListener('DOMContentLoaded', () => {

// clear calculator
    let clrBtn = document.querySelector('.clrBtn');
    clrBtn.addEventListener('click', () => { clearCalc();});  


let displayValue = [];
let numArray = [];

let result;
let operator;
let numberActive;

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
        displayValue.push(e.textContent);
        displayWorking.textContent = displayValue.join("");
        numberActive = true;
    })
});
let firstOperator;

// listener for operator buttons
opBtns = document.querySelectorAll('.optBtn');
opBtns.forEach( (e) => {
        e.addEventListener('click', () => {

            operator = e.textContent;

            if ((operator === "=") && (displayWorking.textContent === "0")) {
                displayTally.textContent = "0" + operator;
                displayWorking.textContent = 0;} 
      
            else if (!numberActive) {
                console.log('the firstOperator was: ', firstOperator)
                firstOperator = operator;
                displayTally.textContent = numArray[0] + " " + firstOperator;               
                console.log("But now it has been replaced by: ", operator)
            }

            else if ((numberActive) &&  (!numArray[0])) {
                firstOperator = operator;
                numArray.push(parseInt(displayValue.join("")));
                console.log('numArray', numArray);
                displayValue = [];
                console.log(displayValue);
                displayTally.textContent = numArray[0] + " " + firstOperator;
            }

            else if ((numberActive) && (numArray[0])) {

                numArray.push(parseInt(displayValue.join("")));

                console.log('numArray[1]', numArray[1])

                if (operator != "=") {
                    console.log('last one', numArray[0], firstOperator, numArray[1]);
                    result = operate(numArray[0], numArray[1], firstOperator);
                    displayTally.textContent = result + " " + firstOperator;
                    displayValue = [];
                    numArray = [];
                    numArray[0] = result;
                    firstOperator = operator;
                } else {


                    if ((firstOperator === "/") && (parseInt(numArray[1]) === 0)) {alert(danger)};

                    console.log("Using equals", numArray[0], firstOperator, numArray[1]);

                    result = operate(numArray[0], numArray[1], firstOperator);

                    displayTally.textContent = `${numArray[0]} ${firstOperator} ${numArray[1]} =`;
                    displayWorking.textContent = result;} 
                }
            })

            
            numberActive = false;

           
            
        })
          
            // if equals, then call relevant function, and insert value A, value B, etc etc into function
            
            // if operator is '+, -, *, or /' put the value of displayValue into a new variable, 'valueA'
            // display the operator variable in a new line on the display
            // break for new line in the display
            // empty displayValue, in preparation for new entry.

        


function clearCalc() {
    console.log('cleared');
    displayValue = [];
    numArray = [];
    operator = false;
    displayTally.textContent = "";
    displayWorking.textContent = 0;    
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

    if (operator === "/"){
        console.log('bNum', bNum);
        if (bNum === 0) {
            alert('cannot');
        } else {
        return divide(aNum, bNum);
        }
    };

};
});