import setupModel from "."
import setupDb from "../../database"

let professional
let db

describe("Professionals", () => {
  describe("getAll", () => {
    beforeEach(done => {
      db = setupDb(":memory:")
      professional = setupModel(db)

      db.serialize(function() {
        db.run(
          "CREATE TABLE professional (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, name TEXT NOT NULL, age INTEGER)"
        )

        var stmt = db.prepare(
          "INSERT INTO professional (name, age) VALUES (?, ?)"
        )
        stmt.run("Ana", 30)

        stmt.finalize()

        done()
      })
    })

    afterEach(() => {
      db.close()
    })

    it("returns the expected professionals", async () => {
      expect.assertions(1)

      const response = await professional.getAll()

      expect(response).toEqual([{ id: 1, name: "Ana", age: 30 }])
    })
  })
})
