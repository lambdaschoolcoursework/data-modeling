const db = require('../data/config');

const getRecipes = () => {
    return db('recipes');
};

const getShoppingList = id => {
    return db('recipe_ingredients')
        .join('ingredients', 'recipe_ingredients.ingredient_id', '=', 'ingredients.id')
        .where('recipe_ingredients.recipe_id', id)
        .select('ingredients.ingredient', 'recipe_ingredients.quantity');
};

const getInstructions = id => {
    return db('recipes')
        .where({id})
        .select('instructions');
};

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};