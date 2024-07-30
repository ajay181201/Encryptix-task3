// Function to append numbers and operators to the display
function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('result').value = '';
}

// Function to perform calculation based on the input
function calculate() {
    let input = document.getElementById('result').value;
    let result = eval(input); // Using eval for simplicity (not recommended for production)

    document.getElementById('result').value = result;
}
