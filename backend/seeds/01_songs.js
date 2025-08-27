/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { faker } = require("@faker-js/faker");
const fakeSongs = [];
const desiredFakeSongs = 25;
let fakeId = 1;

for (let i = 0; i < desiredFakeSongs; i++) {
  fakeSongs.push({
    id: fakeId,
    genre: faker.music.genre(),
    songname: faker.music.songName(),
    release_date: faker.date.past(),
    song_length: faker.number.int({min: 120, max: 420}),
    cover_art: faker.image.urlPicsumPhotos()
  });
  fakeId++;
}

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("songs").del();
  await knex("songs").insert(fakeSongs);
};
