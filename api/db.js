const db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password: '123',
    database : 'facilita_juridico_db'
  }
});

module.exports = { db };

