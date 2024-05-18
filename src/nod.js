

import lowDb from "lowdb"
import FileSync from "lowdb/adapters/FileSync"
const db = lowDb(new FileSync('db.json'))

db.defaults({ notes: [] }).write()
