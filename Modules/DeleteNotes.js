// ============================ TO DO 3 ============================
// TODO 9. uncomment DELETE request handler
app.delete('/notes', (req, res) => {
    const query = req.query
    const id = query.id
    const parsedId = parseInt(id)
    const get_data = db.get('notes')
    .find({id:parsedId})
    .value()
    if(get_data){
      db.get('notes')
      .remove({ id: parsedId })
      .write()
    res.send('Ok')
      
    } else{
      res.status(404).send('no data found')
    }
    
    
  })
  // ========================== Batas To do 3 ==========================
  