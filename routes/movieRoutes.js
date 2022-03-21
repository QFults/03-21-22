const router = require('express').Router()
const db = require('../db')

// GET all movies
router.get('/movies', (req, res) => {
  db.query('SELECT * FROM movies', (err, movies) => {
    if (err) { console.log(err) }
    res.json(movies)
  })
})

// POST one movie
router.post('/movies', (req, res) => {
  db.query('INSERT INTO movies SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// PUT one movie
router.put('/movies/:id', (req, res) => {
  db.query('UPDATE movies SET ? WHERE ?', [req.body, { id: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// DELETE one movie
router.delete('/movies/:id', (req, res) => {
  db.query('DELETE FROM movies WHERE ?', { id: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
