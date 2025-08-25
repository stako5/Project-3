/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require('@faker-js/faker');
const fakeAlbums = []
const desiredfakeAlbums = 10
let fakeId = 1

for (let i = 0; i < desiredfakeAlbums; i++) {
  fakeAlbums.push({id: fakeId, name: faker.music.songName(), description: faker.lorem.sentence()  })
  fakeId++;
}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('albums').del()
  await knex('albums').insert(fakeAlbums);
};

