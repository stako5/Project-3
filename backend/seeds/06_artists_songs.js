/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

let fakeArtist = [];
let fakeId = 1
let desiredFakeArtist = 25;
for (let i = 0; i < desiredFakeArtist; i++) {
    fakeArtist.push({id: fakeId, artists_id: fakeId, songs_id: fakeId})

  fakeId++;
}
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('artists_songs').del()
  await knex('artists_songs').insert(fakeArtist);
};
