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

 createNumPad();
 populateNumPad();
 createEvalPad();
 populateEvalPad();
 createEvalWindow();
 createEvalInputWindow();
 createTopEvalPad();

