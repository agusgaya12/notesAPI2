const express = require('express')
const db = require('../Controller/db')
const app = express.Router()

app.post('/notes', (req, res) => {
  const body = req.body
  const id = body.id
  const parsedId = parseInt(id)
  const get_data = db.getIndex(id)
  if (get_data) {
    res.status(409).send('Conflict')
  } else {
    db.postNotes(body)
    res.send('Succesfully added : ' + body)
  }
})

module.exports = app