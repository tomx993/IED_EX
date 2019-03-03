function counterConsoleIngredients(){

    alert('Controlla la console!')

    var recepies = ['Pane', 'Acqua', 'Salame', 'Polenta'];

        function printTarget(ingredient){
            console.log('The word '+ingredient+' have '+ingredient.length+' letters.');
        }


        for( var ingredientIndex in recepies){
            
            var ingredient = recepies[ingredientIndex];
            printTarget(ingredient);
        }
}