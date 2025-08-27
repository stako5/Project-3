/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
let fakeAlbums = [];
let fakeId = 1
let desiredFakeAlbums = 25;
for (let i = 0; i < desiredFakeAlbums; i++) {
    fakeAlbums.push({id: fakeId, albums_id: fakeId, songs_id: fakeId})

  fakeId++;
}
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('albums_songs').del()
  await knex('albums_songs').insert(fakeAlbums);
};
