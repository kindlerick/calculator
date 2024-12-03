const calculatorContainer = document.querySelector(".container");
const calculatorBody = document.createElement("div");
calculatorBody.id = "calculatorBody";
calculatorContainer.appendChild(calculatorBody);


const numPadArray = ["7","8","9","4","5","6","1","2","3","0","."];

const evalPadArray = ["-", "+", "*", "/"];

// evalPad

function createEvalPad() {

    const calcBody = document.querySelector("#calculatorBody");

    if(calcBody) {
        const evalPadBody = document.createElement("div");
        evalPadBody.id = "evalPadBody";
        calcBody.appendChild(evalPadBody);
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

    const calcBody = document.querySelector("#calculatorBody");

    if(calcBody) {
        const numBody = document.createElement("div");
        numBody.id = "numBody";
        calcBody.appendChild(numBody);
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

// evalWindow


createNumPad();
populateNumPad();
createEvalPad();
populateEvalPad();