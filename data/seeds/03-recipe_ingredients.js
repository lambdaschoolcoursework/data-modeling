exports.seed = knex => {
	return knex('recipe_ingredients').insert([
		{
			recipe_id: 1,
			ingredient_id: 1,
			quantity: '2 slices'
		},
		{
			recipe_id: 1,
			ingredient_id: 2,
			quantity: '5 slices'
		}
	]);
};