// Update with your config settings.
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */



module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'docker',
      database: 'mydb',
      port: 5432
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
// Docker Command for local env
// docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
// -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
//
// docker exec -it <container #> bash
// psql -U postgres
// CREATE DATABASE mydb;
// \c mydb
//
// ~Project-3/backend: npx knex migrate:rollback && npx knex migrate:latest && npx knex seed:run
// ~Project-3/backend: npm run dev
// ~Project-3/backend: cd ../frontend
// ~Project-3/frontend: npm run dev

  // development: {
  //   client: 'pg',
  //   connection: {
  //     host: process.env.DB_HOST || process.env.PGHOST || 'localhost',
  //     user: process.env.DB_USER || process.env.PGUSER || 'postgres',
  //     password: process.env.DB_PASSWORD || process.env.PGPASSWORD || 'postgres',
  //     database: process.env.DB_DATABASE || process.env.PGDATABASE || 'mydb',
  //     port: process.env.DB_PORT || process.env.PGPORT || 5432
  //   },
  //   migrations: {
  //     directory: './migrations'
  //   },
  //   seeds: {
  //     directory: './seeds'
  //   }
  // }
};
