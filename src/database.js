const sqlite3 = window.require("sqlite3").verbose()

export default (db = "dd.db") => new sqlite3.Database(db)

// db.close()

// db.serialize(function() {
//   db.run("CREATE TABLE if not exists lorem (info TEXT)")

//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)")
//   for (var i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i)
//   }
//   stmt.finalize()

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//     console.log(row.id + ": " + row.info)
//   })
// })

// db.close()
