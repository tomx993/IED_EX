 
function calculator(){

   
    alert('Benvenuto nella calcolatrice!');

    var firstNumber = prompt('Scegli il primo numero');
    firstNumber = parseInt(firstNumber);

    var operator = prompt('Scegli un operatore: " + , - , * , / "');

    var secondNumber = prompt('Scegli il secondo numero');
    secondNumber = parseInt(secondNumber);

    function sum(){

        var temporaryResult = firstNumber + secondNumber;
        result = temporaryResult;
        alert(temporaryResult);

    }
    function minus(){

        var temporaryResult = firstNumber - secondNumber;
        result = temporaryResult;
        alert(temporaryResult);

    }
    function multiply(){

        var temporaryResult = firstNumber * secondNumber;
        result = temporaryResult;
        alert(temporaryResult);

    }
    function divided(){

        var temporaryResult = firstNumber / secondNumber;
        result = temporaryResult;
        alert(temporaryResult);

    }

    var result = null;

    switch(operator){

        case "+":
            sum();
            break
        case "-":
            minus();
            break
        case "*":
            multiply();
            break
        case "/":
            divided();
            break
        default:
            alert('Qualcosa è andato storto!');
            break;
    }
}    
