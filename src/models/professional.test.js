import db from "."
const { sequelize, Professional, Sale } = db

describe("Professional model", () => {
  beforeEach(() => sequelize.sync({ force: true }))
  describe("findAll", () => {
    describe("empty database", () => {
      it("returns empty array", async () => {
        expect(await Professional.findAll()).toEqual([])
      })
    })

    describe("with a professional", () => {
      const professional = { name: "Ana" }
      beforeEach(() => Professional.create(professional))

      it("returns all professionals in db", async () => {
        expect(await Professional.findAll()).toMatchObject([professional])
      })
    })

    describe("with a professional with a sale", () => {
      const professional = { name: "Ana" }
      const sale = { value: 30 }

      beforeEach(() =>
        Professional.create(professional).then(professional => {
          return professional.createSale(sale)
        })
      )

      it("returns all professionals in db with the sale", async () => {
        expect(
          await Professional.findAll({
            include: Sale
          })
        ).toMatchObject([
          {
            ...professional,
            sales: [{ value: 30, id: expect.anything() }]
          }
        ])
      })
    })
  })
})
