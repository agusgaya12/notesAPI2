// ============================ To do 2 ============================
// TODO 8. uncomment POST Request handler
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
// ============================ Batas TO do 2 ============================
