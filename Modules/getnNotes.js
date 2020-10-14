app.get('/notes', (req, res) => {
    const result = db.get('notes')
    .value()
    res.send(result)
  })
  