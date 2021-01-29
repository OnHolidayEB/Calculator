const numBtns = document.querySelectorAll('.numBtn');
const opBtns = document.querySelectorAll('.opBtn');
const equals = document.getElementById('=');
const clear = document.getElementById('clear');
let displayValue = "";
let aNumber;
let bNumber;
let op;


//initializes the calculator if the a/c button is clicked
clear.addEventListener('click', init);


//displays and stores the numbered inputs based on user input
numBtns.forEach(numBtn => numBtn.addEventListener('click', () => {

    if(numBtn.id != "backspace" && numBtn.id != "."){
        displayValue += numBtn.id;
    }
    //removes last number entered when backspace is pushed
    else if(numBtn.id == "backspace"){
        displayValue = backspace();
        
    }
    //disallows two decimals per number
    else if(numBtn.id == '.'){
        if(decimalClicked()){
            return;
        } 
        else{
            displayValue += numBtn.id;
        }
    }
    displayInput(displayValue);


}));

//when an operator is selected - stores the first number in a variable
//stores the operator
opBtns.forEach(opBtn => opBtn.addEventListener('click', () =>{

    if(displayValue == ""){
        return;
    }

    aNumber = displayValue;
    op = opBtn.id;
    displayValue = "";
}));

//when equals is selected - runs the operate function and stores the new value
//to allow user to continue to do operations
equals.addEventListener('click', () => {
    if(displayValue == "" || !aNumber){
        return;
    }
    bNumber = parseFloat(displayValue);
    displayValue = (operate(parseFloat(aNumber), op, bNumber));
    displayInput(displayValue);
    aNumber = displayValue;
});    

//initializes values
function init(){
    displayValue = "";
    displayInput(displayValue);
    aNumber = 0;
    bNumber = 0;
    op = "";
}

//displays the input
function displayInput(displayValue){
    display = document.querySelector('.display');
    display.textContent = displayValue;
};

//removes the last value in the current displayed 
function backspace(){
    let stringArray = Array.from(displayValue);
    stringArray.splice((stringArray.length - 1),1)
    return stringArray.join('');
}

//returns whether or not the current number contains a decimal
function decimalClicked(){
    let stringArray = Array.from(displayValue);
    return stringArray.includes('.');
    
}

function sum(a, b){
    return a + b;
};

function difference(a,b){
    return a-b;
};

function product(a,b){
    return a * b;
};

function quotient(a,b){
    return a/b;
};

function operate(a, operator, b){
    switch(operator){
        case '+' :
            return sum(a,b)
            break;
        case '-':
            return difference(a,b);
            break;
        case '*':
            return product(a,b);
            break;
        case '/':
            return quotient(a,b);
            break;      

    }
}

