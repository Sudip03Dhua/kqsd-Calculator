document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('cal-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    function evaluteResult() {

        const convertValue = currentValue
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("π", "Math.PI")
            .replace("ln", "Math.log")
            .replace("tan", "Math.tan")
            .replace("√", "Math.sqrt")
            .replace("log", "Math.log10")
            .replace("e", "Math.E")
       
        const result = eval(convertValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            console.log('button click', button.innerText);

            const value = button.innerText;

            try{
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
            }catch (error){
                console.error(error);
                currentValue="ERROR";
                display.value=currentValue;


            }
           


        });
    }



});