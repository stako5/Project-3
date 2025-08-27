// Update with your config settings.
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */



module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || process.env.PGHOST || 'localhost',
      user: process.env.DB_USER || process.env.PGUSER || 'postgres',
      password: process.env.DB_PASSWORD || process.env.PGPASSWORD || 'postgres',
      database: process.env.DB_DATABASE || process.env.PGDATABASE || 'mydb',
      port: process.env.DB_PORT || process.env.PGPORT || 5432
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
