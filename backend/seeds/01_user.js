/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_table').del()
  await knex('user_table').insert([
    {id: 1, First_Name: 'Buzz', Last_Name: 'Choi', Username: 'BuzzBuzz'},
  ]);
};
