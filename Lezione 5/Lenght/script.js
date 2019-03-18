function counterConsoleIngredients(){

    alert('Controlla la console!')

    var recepies = ['Pane', 'Acqua', 'Salame', 'Polenta'];

        function printTarget(ingredient){
            console.log('La parola "'+ingredient+'" ha "'+ingredient.length+'" lettere.');
        }


        for( var ingredientIndex in recepies){
            
            var ingredient = recepies[ingredientIndex];
            printTarget(ingredient);
        }
}