const express = require('express');
const Recipes = require('./model');

const app = express.Router();

app.get('/', (request, response) => {
    Recipes.getRecipes()
        .then(res => response.status(200).json(res))
        .catch(err => response.status(500).json({message: 'error fetching recipes'}))
});

app.get('/:id/ingredients', (request, response) => {
    Recipes.getShoppingList(request.params.id)
        .then(res => response.status(200).json(res))
        .catch(err => response.status(500).json({message: 'error fetching shopping list'}));
});

app.get('/:id/instructions', (request, response) => {
    Recipes.getInstructions(request.params.id)
        .then(res => response.status(200).json(res))
        .catch(err => response.status(500).json({message: 'error fetching instructions'}))
});

module.exports = app;