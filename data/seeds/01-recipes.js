exports.seed = knex => {
	return knex('recipes').insert([
		{
			recipe_name: 'sandwich',
			instructions: 'toast bread, insert condiments'
		}
	]);
};