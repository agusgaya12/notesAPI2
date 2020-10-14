const express = require('express')
const db = require('../Controller/db')
const app = express.Router()

app.patch('/notes', (req, res) => {
    const body = req.body
    const id = req.query.id
    const get_data = db.getIndex(id)
    if (get_data) {
        db.editNotes(id, body)
        res.send(body)
    } else {
        res.status(404).send('Data Not Found')
    }
})
module.exports = app