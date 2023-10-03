
let result = document.getElementById('result');
let isDegrees = true;

function appendToDisplay(value) {
    result.value += value;
}
function calculateanswer() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

// const eValue = Math.E;
function calculate() {
    const eValue = Math.E;
     document.getElementById("result").value *= eValue;
}

function clearDisplay() {
    result.value = '';
}

function deleteLastCharacter() {
    result.value = result.value.slice(0, -1);
}
function calculateTrig(func) {
    let value = parseFloat(result.value);
    if (!isNaN(value)) {
        if (!isDegrees && (func === 'sin')) {
            value = value * (Math.PI / 180);
        }
        switch (func) {
            case 'sin':
                result.value = Math.sin(value);
                break;
        }
    } else {
        result.value = 'Error';
    }
}
let angleRadians = null;
function degreesToRadians() {
    
        const angleDegrees = parseFloat(document.getElementById("result").value);
        // console.log(angleDegrees);
        if (!isNaN(angleDegrees)) {
            angleRadians = (angleDegrees * Math.PI) / 180;
            result.value = angleRadians;
        
            // document.getElementById("result").textContent = `Angle in radians: ${angleRadians}`;
        } else {
            document.getElementById("result").textContent = "Invalid input";
        }
    }

    function appendMuSymbol() {
        document.getElementById("result").value *=1e-6 ;
    }

