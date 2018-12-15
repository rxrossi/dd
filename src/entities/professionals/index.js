import sequelize, { Sequelize } from "../../database"

async function setupModel() {
  const Professional = sequelize.define("professional", {
    name: {
      type: Sequelize.STRING
    }
  })

  await Professional.sync()

  return Professional
}

export default setupModel
