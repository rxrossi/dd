import db from "."
const { sequelize, Professional, Sale } = db

describe("Sale model", () => {
  const professional = { name: "Ana" }
  beforeEach(() =>
    sequelize
      .sync({ force: true })
      .then(() => Professional.create(professional))
  )
  describe("findAll", () => {
    describe("empty database", () => {
      it("returns empty array", async () => {
        expect(await Sale.findAll()).toEqual([])
      })
    })

    describe("with a professional", () => {
      const sale = { value: "Ana", professionalId: 1 }
      beforeEach(() => Sale.create(sale))

      it("returns all sales in db with professional", async () => {
        expect(await Sale.findAll({ include: Professional })).toMatchObject([
          {
            ...sale,
            professional: {
              name: "Ana"
            }
          }
        ])
      })
    })
  })
})
