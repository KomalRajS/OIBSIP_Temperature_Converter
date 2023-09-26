function convertTemp() {
    const tempInput = document.getElementById("temp1");
    const unitInput = document.getElementById("unit1").value;
    const unitOutput = document.getElementById("unit2").value;

    const tempOutput = document.getElementById("result");

    const temperature = parseFloat(tempInput.value);

    let convertTemp;

    if (isNaN(temperature)) {
        tempOutput.textContent = "Please enter a valid number ";
        return;
    }

    switch(unitInput) {
        case "celsius":
            convertTemp = {
                fahrenheit: (temperature*9/5) + 32,
                kelvin: temperature + 273.15
            };
            break;

        case "fahrenheit":
            convertTemp = {
                celsius: (temperature - 32) * 5/9,
                kelvin: (temperature - 32) * 5/9 + 273.15
            };
            break;

        case "kelvin":
            convertTemp = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32
            };
            break;

    }

    if (unitInput === unitOutput) {
        tempOutput.textContent = "Same units selected!";
    }

    switch(unitOutput) {
        case "celsius":
            tempOutput.textContent = `${convertTemp.celsius.toFixed(2)}`;
            break;

        case "fahrenheit":
            tempOutput.textContent = `${convertTemp.fahrenheit.toFixed(2)}`;
            break;

        case "kelvin":
            tempOutput.textContent = `${convertTemp.kelvin.toFixed(2)}`;
            break;
    }
    
}