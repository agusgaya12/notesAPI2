const express = require('express')
const db = require('../Controller/db')
const app = express.Router()

app.post('/notes', (req, res) => {
  const body = req.body
  // TODO 7. use lowdb push method
  const id = body.id
  const parsedId = parseInt(id)
  const get_data = db.get('notes')
    .find({ id: parsedId })
    .value()
  if (get_data) {
    res.status(409).send('COnflict')
  } else {
    db.get('notes')
      .push(body)
      .write()
    res.send(body)
  }
})

module.exports = app