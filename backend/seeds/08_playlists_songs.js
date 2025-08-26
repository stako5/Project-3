/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
let fakePlaylists = [];
let fakeId = 1
let desiredFakePlaylists = 10;
for (let i = 0; i < desiredFakePlaylists; i++) {
    fakePlaylists.push({id: fakeId, playlists_id: fakeId, songs_id: fakeId})

  fakeId++;
}
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('playlists_songs').del()
  await knex('playlists_songs').insert(fakePlaylists);
};

