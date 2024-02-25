document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('cal-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    function evaluteResult() {

        const convertValue = currentValue
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01");
        
        const result = eval(convertValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            console.log('button click', button.innerText);

            const value = button.innerText;

            if (value == "AC") {
                currentValue = "";
                display.value = currentValue;
            } else if (value == "=") {
                evaluteResult();
            }

            else {

                currentValue += value;

                display.value = currentValue;
            }


        });
    }



});