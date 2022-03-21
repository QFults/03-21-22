const express = require('express')
const mysql = require('mysql2')

const app = express()

const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/favorites_db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// GET all movies
app.get('/movies', (req, res) => {
  db.query('SELECT * FROM movies', (err, movies) => {
    if (err) { console.log(err) }
    res.json(movies)
  })
})

// POST one movie
app.post('/movies', (req, res) => {
  db.query('INSERT INTO movies SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

app.listen(3000)

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'rootroot',
//   database: 'favorites_db'
// })


// db.query('SELECT * FROM movies', (err, data) => {
//   if (err) { console.log(err) }
//   console.log(data)
// })
