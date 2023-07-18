/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item_table').del()
  await knex('item_table').insert([
    {id: 1, user_table_id: 1, Item_Name: 'Catnip', Description: 'Makes cats high', Quantity: 10},
  ]);
};
