import setupModel from "."

describe("Professional", () => {
  let professional
  beforeEach(async done => {
    professional = await setupModel()
    done()
  })

  describe("getAll", () => {
    describe("empty database", () => {
      it("returns a empty array", async () => {
        expect(await professional.findAll()).toEqual([])
      })
    })

    describe("with a professional", () => {
      beforeEach(() => {
        professional.create({ name: "Ana" })
      })

      it("return a array containing the professional", async () => {
        expect(await professional.findAll()).toMatchObject([{ name: "Ana" }])
      })
    })
  })
})
