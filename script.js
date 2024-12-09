const calculatorContainer = document.querySelector(".container");
const calculatorBody = document.createElement("div");
calculatorBody.classList.add('calculatorBody');
calculatorContainer.appendChild(calculatorBody);

const calculatorLowerBody = document.createElement("div");
const calculatorTopBody = document.createElement("div");

calculatorTopBody.classList.add('topBody');;
calculatorBody.appendChild(calculatorTopBody);

calculatorLowerBody.classList.add('lowerBody');
calculatorBody.appendChild(calculatorLowerBody);

const topPadArray = ["DEL", "="];
const numPadArray = ["7","8","9","4","5","6","1","2","3","0","."];
const evalPadArray = ["-", "+", "*", "/"];
let numArray = [];
let num1Result = 0;
let firstNumber = false;

function createEvalPad() {

    const lowerBody = document.querySelector(".lowerBody");

    if(lowerBody) {
        const evalPadBody = document.createElement("div");
        evalPadBody.classList.add('evalPadBody');
        lowerBody.appendChild(evalPadBody);
    } else {
        console.error("calculatorBody not found!");
    }
}

function populateEvalPad() {

    const evalPadBody = document.querySelector('.evalPadBody');
    for(let i = 0; i < evalPadArray.length; i++) {
        let evalKey = document.createElement("div");
        evalKey.textContent = evalPadArray[i];
        evalKey.id = evalPadArray[i].toString();
        evalKey.classList.add('evalKey');
        evalPadBody.appendChild(evalKey);
    }
}


function createNumPad() {

    const lowerBody = document.querySelector(".lowerBody");

    if(lowerBody) {
        const numBody = document.createElement("div");
        numBody.classList.add('numBody');
        lowerBody.appendChild(numBody);
    } else {
        console.error("calculatorBody not found!");
    }

}

function populateNumPad() {

    const numBody = document.querySelector('.numBody');

    for(let i = 0; i < numPadArray.length; i++) {
        let numKey = document.createElement("div");
        numKey.textContent = numPadArray[i];
        numKey.id = numPadArray[i].toString();
        numKey.classList.add('numKey');
        numBody.appendChild(numKey);
    }
}


function createEvalWindow() {

    const topBody = document.querySelector(".topBody");

    if(topBody) {
        const evalWindow = document.createElement("div");
        evalWindow.classList.add('evalWindow');
        topBody.appendChild(evalWindow);
    } else {
        console.error("calculatorBody not found!");
    }

}

function createEvalInputWindow() {

    const evalWindow = document.querySelector(".evalWindow");

    if(evalWindow) {
        const evalInputWindow = document.createElement("input");
        evalInputWindow.classList.add('evalInputWindow');
        evalInputWindow.type = "text";
        evalWindow.appendChild(evalInputWindow);
    } else {
        console.error("calculatorBody not found!");
    }
}

function createTopEvalPad() {

    const topBody = document.querySelector(".topBody");
    const evalKeyWindow = document.createElement("div");
    evalKeyWindow.classList.add('evalKeyWindow');
    topBody.appendChild(evalKeyWindow);

    for(let i = 0; i < topPadArray.length; i++) {
        let topEvalKey = document.createElement("div");
        topEvalKey.textContent = topPadArray[i];
        topEvalKey.id = topPadArray[i].toString();
        topEvalKey.classList.add('topEvalKey');
        evalKeyWindow.appendChild(topEvalKey);
    }
}

function createCalculator() {

    createNumPad();
    populateNumPad();
    createEvalPad();
    populateEvalPad();
    createEvalWindow();
    createEvalInputWindow();
    createTopEvalPad();

}

let numbers = [];
let operations = [];

const outputWindow = document.querySelector('.evalInputWindow');

function ifOperationValid() {

    let evalRegex = /[+\-*/]/;
    let myIndex;
    
    numArray.forEach((item, index) => {

        if(evalRegex.test(item)){
            operations.push(item);
            myIndex = index;
        }
    });


    if(operations.length > 1){
        outputWindow.value = "ERROR";
        operations = [];
        return false;
    }

    let num1, num2;
    
    if(numbers.length === 0) {
    num1 = numArray.slice(0, myIndex).join('');
    num2 = numArray.slice(myIndex + 1).join('');
    numbers.push(num1);
    numbers.push(num2);
    } else {
        num2 = numArray.slice(myIndex + 1).join('');
        numbers.push(num2);
    }

    if(numbers.length > 2) {
        outputWindow.value = "ERROR";
        numbers = [];
        return false;
    }

    return true;

}

function clear() {
    
    numArray = [];
    numbers = [];
    operations = [];
}


function conductOperation() {

        let num1 = parseFloat(numbers[0]);
        let num2 = parseFloat(numbers[1]);
        const operator = operations[0];

        switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        default:
            return "ERROR";
    }
}


let resultValue = 0;

function attachListeners() {

    const outputWindow = document.querySelector('.evalInputWindow');

    const numKey = document.querySelectorAll('.numKey');
    numKey.forEach((key) => {
        key.addEventListener('click', () => {
            let numKeyId = key.id;
            outputWindow.value += numKeyId; 
            numArray.push(numKeyId);
        })
    })

    const evalKey = document.querySelectorAll('.evalKey')
    evalKey.forEach((key => {
        key.addEventListener('click', () => {
            let evalKeyId = key.id;
            outputWindow.value += evalKeyId;
            numArray.push(evalKeyId);
        })
    }))

    const clearKey = document.getElementById('DEL');
    const sumKey = document.getElementById('=');

    clearKey.addEventListener('click', () => {
        outputWindow.value = "";
        clear();
    })

    sumKey.addEventListener('click', () => {
        console.log("sum clicked");
        if(ifOperationValid()){
            let input = conductOperation();
            outputWindow.value = input.toFixed(2);
            clear();
            numbers.push(input);
        }
    })

}

createCalculator();
attachListeners();

