// here's is the js of calculator
// this function includes all display and arthimatic functions
document.addEventListener('DOMContentLoaded', function () { 
    var string = "";
    var display = document.querySelector('input');

    function updateDisplay() {
        display.value = string;
    }
    // this handleButtonClick function is for arthimatic and keyboard events
    function handleButtonClick(value) {
        if (value === "=") {
            string = eval(string);
            updateDisplay();
        } else if (value === "AC") {
            string = "";
            updateDisplay();
        }
        else if (value === "C"){
            string = string.slice(0,-1);
            updateDisplay();
        }
        
        else {
            string = string + value;
            updateDisplay();
        }
    }
    // here this portion is for on click display of calculator
    var buttons = document.querySelectorAll(".buttons");
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            handleButtonClick(e.target.innerHTML);
        });
    });
    // this part is for clickiing keys on keyboard
    document.addEventListener('keydown', function (e) {
        var key = e.key;

        if ((key >= '0' && key <= '9') || key === '.' || key === '/' || key === '*' || key === '-' || key === '+' || key === '%') {
            handleButtonClick(key);
        } else if (key === 'Enter') {
            handleButtonClick('=');
        } else if (key === 'Escape') {
            handleButtonClick('AC');
        }
        else if(key === 'Backspace'){
            handleButtonClick('C')
        }
    });
});