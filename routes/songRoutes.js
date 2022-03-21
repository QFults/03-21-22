const router = require('express').Router()
const db = require('../db')

// GET all songs
router.get('/songs', (req, res) => {
  db.query('SELECT * FROM songs', (err, songs) => {
    if (err) { console.log(err) }
    res.json(songs)
  })
})

// POST one song
router.post('/songs', (req, res) => {
  db.query('INSERT INTO songs SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// PUT one song
router.put('/songs/:id', (req, res) => {
  db.query('UPDATE songs SET ? WHERE ?', [req.body, { id: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// DELETE one song
router.delete('/songs/:id', (req, res) => {
  db.query('DELETE FROM songs WHERE ?', { id: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
