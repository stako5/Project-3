/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const { faker } = require('@faker-js/faker');
const fakeUsers = []
const desiredFakeUsers = 10
let fakeId = 1

for (let i = 0; i < desiredFakeUsers; i++) {
  fakeUsers.push({id: fakeId, username: faker.person.firstName(), password: faker.person.lastName(), playlists_id: fakeId})
  fakeId++;
}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert(fakeUsers);
};
