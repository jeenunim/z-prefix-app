/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('item_table', table => {
        table.increments('id');
        table.integer('user_table_id');
        table.foreign('user_table_id').references('user_table.id');
        table.string('Item_Name');
        table.string('Description');
        table.integer('Quantity');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('item_table', table => {
        table.dropForeign('user_table_id');
      }) 
      .then(function() {
        return knex.schema.dropTableIfExists('item_table');
      });
};
