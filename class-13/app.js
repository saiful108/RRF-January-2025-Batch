
const display = document.getElementById("display");


let currentInput = "";  
let previousInput = "";
let operator = "";      


function updateDisplay(value) {
    display.textContent = value;
}


function clearCalculator() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("0");
}


function calculate() {
    if (previousInput !== "" && currentInput !== "") {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                result = current === 0 ? "Error" : prev / current;
                break;
            default:
                return;
        }

        
        currentInput = result.toString();
        operator = "";
        previousInput = "";
        updateDisplay(currentInput);
    }
}


function handleButtonClick(value) {
    if (!isNaN(value) || value === ".") {
        if (value === "." && currentInput.includes(".")) return; 
        currentInput += value;
        updateDisplay(currentInput);
    } else if (["+", "-", "*", "/"].includes(value)) { 
        if (currentInput === "") return;
        operator = value;
        previousInput = currentInput;
        currentInput = "";
    } else if (value === "=") { 
        calculate();
    } else if (value === "C") { 
        clearCalculator();
    }
}


document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button.getAttribute("data-value")));
});


clearCalculator();



const cal=document.getElementById('cal')
cal.addEventListener('click', function(){

    
    cal.style.cssText = "color: red; font-size: 8px; padding: 10px; border: 1px solid red; border-radius: 5px; background-color: yellow;"; ;
});