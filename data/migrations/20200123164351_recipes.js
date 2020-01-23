exports.up = (knex, Promise) => {
    return knex.schema
        .createTable('recipes', table => {
            table.increments();
            table.string('recipe_name')
                .notNullable()
                .index();
            table.string('instructions')
                .notNullable();
        })
        .createTable('ingredients', table => {
            table.increments();
            table.string('ingredient')
                .notNullable();
        })
        .createTable('recipe_ingredients', table => {
            table.increments();
            table.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.integer('ingredient_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.string('quantity')
                .notNullable();
        })
};

exports.down = (knex, Promise) => {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};