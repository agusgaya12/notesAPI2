const express = require('express')
const bodyParser = require('body-parser')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const app = express()
const adapter = new FileSync('db.json')
const db = low(adapter)

app.use(bodyParser.json())



app.get('/', (req, res) => {
  res.send('hello world!')
})

app.listen(3000, () => {
  console.log(`server is listening on http://localhost:3000`);
})
