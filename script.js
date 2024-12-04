const calculatorContainer = document.querySelector(".container");
const calculatorBody = document.createElement("div");
calculatorBody.id = "calculatorBody";
calculatorContainer.appendChild(calculatorBody);

const calculatorLowerBody = document.createElement("div");
const calculatorTopBody = document.createElement("div");

calculatorTopBody.id = "topBody";
calculatorBody.appendChild(calculatorTopBody);

calculatorLowerBody.id = "lowerBody";
calculatorBody.appendChild(calculatorLowerBody);

const topPadArray = ["DEL", "="];

const numPadArray = ["7","8","9","4","5","6","1","2","3","0","."];

const evalPadArray = ["-", "+", "*", "/"];

function createEvalPad() {

    const lowerBody = document.querySelector("#lowerBody");

    if(lowerBody) {
        const evalPadBody = document.createElement("div");
        evalPadBody.id = "evalPadBody";
        lowerBody.appendChild(evalPadBody);
    } else {
        console.error("calculatorBody not found!");
    }
}

function populateEvalPad() {

    for(let i = 0; i < evalPadArray.length; i++) {
        let evalKey = document.createElement("div");
        evalKey.textContent = evalPadArray[i];
        evalKey.id = "evalKey";
        evalPadBody.appendChild(evalKey);
    }
}


function createNumPad() {

    const lowerBody = document.querySelector("#lowerBody");

    if(lowerBody) {
        const numBody = document.createElement("div");
        numBody.id = "numBody";
        lowerBody.appendChild(numBody);
    } else {
        console.error("calculatorBody not found!");
    }

}

function populateNumPad() {

    for(let i = 0; i < numPadArray.length; i++) {
        let numKey = document.createElement("div");
        numKey.textContent = numPadArray[i];
        numKey.id = "numKey";
        numBody.appendChild(numKey);
    }
}


function createEvalWindow() {

    const topBody = document.querySelector("#topBody");

    if(topBody) {
        const evalWindow = document.createElement("div");
        evalWindow.id = "evalWindow";
        topBody.appendChild(evalWindow);
    } else {
        console.error("calculatorBody not found!");
    }

}

function createEvalInputWindow() {

    const evalWindow = document.querySelector("#evalWindow");
    if(evalWindow) {
        const evalInputWindow = document.createElement("input");
        evalInputWindow.id = "evalInputWindow";
        evalWindow.appendChild(evalInputWindow);
    } else {
        console.error("calculatorBody not found!");
    }
}

function createTopEvalPad() {

    const topBody = document.querySelector("#topBody");
    const evalKeyWindow = document.createElement("div");
    evalKeyWindow.id = "evalKeyWindow";
    topBody.appendChild(evalKeyWindow);

    for(let i = 0; i < topPadArray.length; i++) {
        let topEvalKey = document.createElement("div");
        topEvalKey.textContent = topPadArray[i];
        topEvalKey.id = "topEvalKey";
        evalKeyWindow.appendChild(topEvalKey);
    }
}
// evalWindow

 createNumPad();
 populateNumPad();
 createEvalPad();
 populateEvalPad();
 createEvalWindow();
 createEvalInputWindow();
 createTopEvalPad();