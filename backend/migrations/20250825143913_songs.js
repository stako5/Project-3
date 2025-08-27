/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("songs", (table) => {
    table.increments();
    table.string("genre", 256);
    table.string("songname");
    table.string('release_date')
    table.string('song_length')
    table.string('cover_art')
    table.integer('artists_id')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("songs");
};
