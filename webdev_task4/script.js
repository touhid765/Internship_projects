let display = document.getElementById("display");
let currentInput = "";
let lastInputType = "";  

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonType = button.getAttribute("data-type");
        const buttonText = button.innerText;

        if (buttonType === "number") {
            appendNumber(buttonText);
        } else if (buttonType === "operator") {
            appendOperator(buttonText);
        } else if (buttonType === "clear") {
            clearDisplay();
        } else if (buttonType === "delete") {
            deleteLast();
        } else if (buttonType === "equal") {
            calculate();
        }
    });
});

function appendNumber(number) {
    if (display.innerText === "0" && number !== ".") {
        display.innerText = "";
    }
    if (lastInputType === "operator") {
        currentInput += " ";
    }
    currentInput += number;
    display.innerText = currentInput;
    lastInputType = "number";
}

function appendOperator(operator) {
    if (currentInput !== "" && lastInputType === "number") {
        currentInput += " " + operator;
        display.innerText = currentInput;
        lastInputType = "operator";
    }
}

function clearDisplay() {
    currentInput = "";
    display.innerText = "0";
    lastInputType = "";
}

function deleteLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.trimEnd();  
        currentInput = currentInput.slice(0, -1);
        display.innerText = currentInput || "0";
    }
}

function calculate() {
    try {
        let sanitizedInput = currentInput.replace(/\s+/g, "");  
        let result = eval(sanitizedInput);
        if (result !== undefined) {
            display.innerText = result;
            currentInput = result.toString();  
        }
    } catch {
        display.innerText = "Error";
    }
}

