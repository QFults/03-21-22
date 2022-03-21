const mysql = require('mysql2')

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'rootroot',
//   database: 'favorites_db'
// })

const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/favorites_db')

db.query('SELECT * FROM movies', (err, data) => {
  if (err) { console.log(err) }
  console.log(data)
})
