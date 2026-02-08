        var currentInput = "";
        var previousInput = "";
        var operator = null;

        // FUNCTION 1: Add number to screen
        function appendNumber(number) {
            currentInput = currentInput + number;
            document.getElementById('display').value = currentInput;
        }

        // FUNCTION 2: Store operator and prepare for next number
        function setOperator(op) {
            if (currentInput === "") return;
            
            operator = op;
            previousInput = currentInput;
            currentInput = "";
            
            document.getElementById('display').value = ""; 
        }

        // FUNCTION 3: Equals
        function calculate() {
            var result;
            var prev = parseFloat(previousInput);
            var current = parseFloat(currentInput);

            if (operator === '+') {
                result = prev + current;
            } else if (operator === '-') {
                result = prev - current;
            } else if (operator === '*') {
                result = prev * current;
            } else if (operator === '/') {
                result = prev / current;
            }

            // Update UI
            document.getElementById('display').value = result;
            
            // Reset state
            currentInput = result; 
            operator = null;
            previousInput = "";
        }

        // FUNCTION 4: Clear
        function clearDisplay() {
            currentInput = "";
            previousInput = "";
            operator = null;
            document.getElementById('display').value = "";
        }
