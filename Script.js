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

var myNumber = prompt('Write a number:');
myNumber = parseInt(myNumber);

if(myNumber == 10 ) {
    alert('Great!');
}
else{
    alert('Bad! :(')
}

var myNumber2 = prompt('Write a second number:');
myNumber2 = parseInt(myNumber2);

if( myNumber2 == myNumber ){
    alert('Twice? Great!!');
}
else{
    alert('Bad! :(');
}

var string = prompt('Write a text:');

alert('Another one!');

var string2 = prompt('Write a second text:');

if( string == string2 ){
    alert('You are a badass!!');
}
else{
    alert('Wrong man! :(');
}

/*
var word = prompt('Write a word');

if( word == pizza || snack){
    alert('Pausa veloce');
}
else{
    alert('Pausa indefinita');
}
*/