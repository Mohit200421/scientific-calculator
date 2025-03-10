document.addEventListener("DOMContentLoaded", function () {
    console.log("document is ready");
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    function evaluateResult() {
        console.log('currentValue:', currentValue)
        const convertedValue = currentValue
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", '*0.01')
            .replace('sin', 'Math.sin')
            .replace('cos', 'Math.cos')
            .replace('tan', 'Math.tan')
            .replace('ln', 'Math.log')
            .replace('π', 'Math.PI');
        console.log('currentValue:', convertedValue)
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            // Logic OF AC:- 
            try {
                if (value == "AC") {
                    currentValue = "";
                    display.value = currentValue;
                } else if (value == "=") {
                    evaluateResult();
                } else {
                    currentValue += value;
                    display.value = currentValue;
                }
            } catch (error) {
                console.error(error);
                currentValue = "ERROR";
                display.value = currentValue
            }
        })

    }
});