/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('albums_songs', table => {
    table.increments()
    table.integer('songs_id')
    table.integer('albums_id')
         table.foreign('songs_id').references('id').inTable('songs').onDelete('CASCADE');
         table.foreign('albums_id').references('id').inTable('albums').onDelete('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema.alterTable('albums_songs', table => {
    table.dropForeign('albums_id')
    table.dropForeign('songs_id')
  })
    .then(function(){
        return knex.schema.dropTableIfExists('albums_songs')
    })
};