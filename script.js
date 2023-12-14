document.addEventListener('DOMContentLoaded', function () {
    const displayInput = document.querySelector('.display input');
    
    function appendToDisplay(value) {
        displayInput.value += value;
    }

    function clearDisplay() {
        displayInput.value = '';
    }

    function deleteLastChar() {
        displayInput.value = displayInput.value.slice(0, -1);
    }

    document.querySelectorAll('.calculator input[type="button"]').forEach(function (button) {
        button.addEventListener('click', function () {
            const value = button.value;

            switch (value) {
                case 'AC':
                    clearDisplay();
                    break;
                case 'DE':
                    deleteLastChar();
                    break;
                case '=':
                   calculateResult();
                    break;
                default:
                    appendToDisplay(value);
                    break;
            }
        });
    });

    function calculateResult() {
        try {
            const result = eval(displayInput.value);
           displayInput.value = result;
        } catch (error) {
            displayInput.value = 'Error';
        }
    }
});
