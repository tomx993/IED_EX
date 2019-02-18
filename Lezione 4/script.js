function counterConsole(){    
    
    alert('Controlla la console!');

    const MILK_FOR_A_PORTION_ML = 60;

    function printMilkByPieEaters( peopleNumber ) {
        var milkTotal = peopleNumber * MILK_FOR_A_PORTION_ML;
        console.log('Il latte necessario per '+peopleNumber+' persone corrisponde a '+milkTotal+' ml.');
    }

    function printMilkQuantities(){
        
        for( var peopleNumber = 1; peopleNumber <= 10; peopleNumber++ ){
            printMilkByPieEaters(peopleNumber);
        }

    }

    printMilkQuantities();


    console.log('');
    // for each

    var numbers = [34, 44, 55, 76]

    for( var myNumbers in numbers ){
        console.log( myNumbers + ' --> ' + numbers[myNumbers]);
    }

    console.log('');
    
    var names = ['Rick', 'Morty', 'Carl', 'Boe'];

    function printTarget(name){
        console.log('Target of today is '+ name);
    }


    for( var nameIndex in names){
        
        var name = names[nameIndex];
        printTarget(name);
    }

}    