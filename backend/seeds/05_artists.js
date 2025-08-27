/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker');
const fakeArtist = []
const desiredfakeArtist = 10
let fakeId = 1

for (let i = 0; i < desiredfakeArtist; i++) {
  fakeArtist.push({id: fakeId,
    name: faker.music.artist(),
    albums_song_id: fakeId,
    bio: faker.lorem.sentence()
  })
  fakeId++;
}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('artists').del()
  await knex('artists').insert(fakeArtist);
};
