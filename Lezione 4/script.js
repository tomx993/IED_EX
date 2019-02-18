const MILK_FOR_A_PORTION_ML = 60;

function printMilkByPieEaters( peopleNumber ) {
    var milkTotal = peopleNumber * MILK_FOR_A_PORTION_ML;
    console.log('Il latte necessario per '+peopleNumber+' persone corrisoponde a '+milkTotal+' ml');
}

for( var peopleNumber = 1; peopleNumber <= 10; peopleNumber++ ){
    printMilkByPieEaters(peopleNumber);
}