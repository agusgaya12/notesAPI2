const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ notes: [] })
    .write()

function getAll() {
    return db
        .get('notes')
        .value()
}

function getIndex(id) {
    const parsedId = parseInt(id)
    return db
        .get('notes')
        .find({ id: parsedId })
        .value()
}

function postNotes(body) {
    db.get('notes')
        .push(body)
        .write()
}

function deleteNotes(id) {
    const parsedId = parseInt(id)
    return db
        .get('notes')
        .remove({ id: parsedId })
        .write()
}

function editNotes(id, body) {
    const parsedId = parseInt(id)
    db.get('notes')
        .find({ id: parsedId })
        .assign(body)
        .write()
    body.id = id
}

module.exports = { getAll, getIndex, postNotes, deleteNotes, editNotes }