//test

/* 
var myNumber = prompt('Write a number:');
myNumber = parseInt(myNumber);

if(myNumber < 0 ) {
    alert('Given number is negative. Absing it..');
    myNumber = Math.abs(myNumber);
}
else{
    alert('Given number is positive!')
}

var squareRoot = Math.sqrt(myNumber);

alert(squareRoot);
*/

// Esercizio 1
function Exercize1() {
    var myNumber = prompt('Write a number:');
    myNumber = parseInt(myNumber);

    if(myNumber == 10 ) {
        alert('Great!');
    }
    else{
        alert('Bad! :(');
    }
}

// Esercizio 2
function Exercize2() {
    var myNumber1 = prompt('Write a number:');
    myNumber1 = parseInt(myNumber1);

    var myNumber2 = prompt('Write a second number:');
    myNumber2 = parseInt(myNumber2);

    if( myNumber1 == myNumber2 ){
        alert('Twice? Great!!');
    }
    else{
        alert('Bad! :(');
    }
}

//Esercizio 3
function Exercize3() {
    var string = prompt('Write a text:');

    alert('Another one!');

    var string2 = prompt('Write a second text:');

    if( string == string2 ){
        alert('You are a badass!!');
    }
    else{
        alert('Wrong man! :(');
    }
}
//Esercizio 4
function Exercize4() {
    var word = prompt('Write a word');

    if( word == 'pizza' || word == 'snack'){
        alert('Pausa veloce');
    }
    else if( word == 'spaghetti' ){
        alert('Pausa lunga');
    }
    else{
        alert('Pausa indefinita');
    }
}