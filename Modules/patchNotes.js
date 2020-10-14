const express = require('express')
const db = require('../Controller/db')
const app = express.Router()

app.patch('/notes', (req, res) => {
    const body = req.body
    const id = req.query.id
    const parsedId = parseInt(id)
    const get_data = db.get('notes')
    console.log(get_data)
        .find({ id: parsedId })
        .value()

    if (get_data) {
        db.get('notes')
            .find({ id: parsedId })
            .assign(body)
            .write()

        body.id = id
        res.send(body)
    } else {
        res.status(404).send('Data Not Found')
    }
})
module.exports = app