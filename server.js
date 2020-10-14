const express = require('express')
const bodyParser = require('body-parser')
const addNoteRoute = require('./Modules/postNotes')
const editNoteRoute = require('./Modules/patchNotes')
const deleteNoteRoute = require('./Modules/DeleteNotes')
const getNoteRoute = require('./Modules/getnNotes')

const app = express()
app.use(bodyParser.json())
app.use(addNoteRoute)
app.use(editNoteRoute)
app.use(deleteNoteRoute)
app.use(getNoteRoute)

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.listen(3000, () => {
  console.log(`server is listening http://localhost:3000`);
})