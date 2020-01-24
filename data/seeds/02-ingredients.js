exports.seed = knex => {
	return knex('ingredients').insert([
		{
			ingredient: 'bread'
		},
		{
			ingredient: 'turkey'
		}
	]);
};