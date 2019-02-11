// FUNCTION
function readNumber(){
    
    var myNumber = prompt('Scrivi un numero:');
    myNumber = parseInt(myNumber);
    return myNumber;

}

function isEqualToTen(myNumber){
    
    const COMPARABLE_NUMBER = 10;
    return myNumber == COMPARABLE_NUMBER;

}

function printMessage(message){

    var myMessage = message;
    alert(myMessage);
    return;

}

function simpleCheck(){

    var myNumber = readNumber();
    var isThatNumberEqualToTen = isEqualToTen(myNumber);

    if(isThatNumberEqualToTen){

        printMessage('Si, il numero è proprio uguale a 10!');

    }

}

// IF - ELSE
function binaryCheck(){

    var myNumber = readNumber();
    var isThatNumberEqualToTen = isEqualToTen(myNumber);

    if(isThatNumberEqualToTen){

        printMessage('Si, il numero è proprio uguale a 10!');

    }
    else{

        printMessage('No, non è 10.');

    }


}

//SWITCH CASE
function switchPie(){

    switch(myNumber){

        case 2:
        case 5:
        case 7:
        case 13:
            return 'Primo';
        case 10:
            return 'Base';
        case 8:
        case 64:
            return 'Octal';
        default:
            return 'None';

    }

}


//MAIN
alert('Simple Check');
simpleCheck();

alert('Binary Check');
binaryCheck();

switchPie();