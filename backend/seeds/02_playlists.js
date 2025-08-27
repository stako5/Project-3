/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker');
const fakePlaylists = []
const desiredFakePlaylists = 25
let fakeId = 1

for (let i = 0; i < desiredFakePlaylists; i++) {
  fakePlaylists.push({id: fakeId, name: faker.music.songName(), description: faker.lorem.sentence() })
  fakeId++;
}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('playlists').del()
  await knex('playlists').insert(fakePlaylists);
};
