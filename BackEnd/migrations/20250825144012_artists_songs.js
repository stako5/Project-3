/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('artists_songs', table => {
    table.increments()
    table.integer('artists_id')
    table.integer('songs_id')
        table.foreign('songs_id').references('id').inTable('songs').onDelete('CASCADE')
        table.foreign('artists_id').references('id').inTable('artists').onDelete('CASCADE');

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('artists_songs', table => {
    table.dropForeign('songs_id')
    table.dropForeign('artists_id')
  })
    .then(function(){
        return knex.schema.dropTableIfExists('artists_songs')
    })

};
