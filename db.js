const sqlite3 = require('sqlite3')

let db = new sqlite3.Database('./db/bakery.db', (err) => {
  if (err) {
      db.close();
      return console.error(err.message);
  } else {
    db.run('CREATE TABLE bakery_order (created_at TEXT)', function(err) {
      if (err) {
          return console.log(err.message);
      }
    }); 
  }
  console.log('Connected to the SQlite database.');
});

module.exports = db;
