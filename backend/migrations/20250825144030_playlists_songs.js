/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('playlists_songs', table => {
    table.increments()
    table.integer('playlists_id')
    table.integer('songs_id')
        table.foreign('songs_id').references('id').inTable('songs').onDelete('CASCADE')
        table.foreign('playlists_id').references('id').inTable('playlists').onDelete('CASCADE');

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('playlists_songs', table => {
    table.dropForeign('songs_id')
    table.dropForeign('playlists_id')
  })
    .then(function(){
        return knex.schema.dropTableIfExists('playlists_songs')
    })

};