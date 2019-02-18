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
function totalExercize(){

    alert('Scrivi un numero uguale a 10');
    Exercize1();
    alert('Scrivi due numeri uguali!');
    Exercize2();
    alert('Scrivi due parole uguali');
    Exercize3();
    alert('Scrivi: pizza, snack o spaghetti!');
    Exercize4();



    // Esercizio 1
    function Exercize1() {
        var myNumber = prompt('Scrivi un numero:');
        myNumber = parseInt(myNumber);

        if(myNumber == 10 ) {
            alert('Grande!');
        }
        else{
            alert('Male! :(');
        }
    }

    // Esercizio 2
    function Exercize2() {
        var myNumber1 = prompt('Scrivi un numero:');
        myNumber1 = parseInt(myNumber1);

        var myNumber2 = prompt('Scrivi un secondo numero:');
        myNumber2 = parseInt(myNumber2);

        if( myNumber1 == myNumber2 ){
            alert('Hai capito! Bravo!');
        }
        else{
            alert('Male! :(');
        }
    }

    //Esercizio 3
    function Exercize3() {
        var string = prompt('Scrivi un testo:');

        alert('Ancora uno!');

        var string2 = prompt('Scrivi un secondo testo:');

        if( string == string2 ){
            alert('Magnifico!!');
        }
        else{
            alert('Game over! :(');
        }
    }
    //Esercizio 4
    function Exercize4() {
        var word = prompt('Scrivi una parola:');

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

}