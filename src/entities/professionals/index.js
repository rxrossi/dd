import sequelize from "../../database"
import Sequelize from "sequelize"

export default async () => {
  const Professional = sequelize.define("professional", {
    name: {
      type: Sequelize.STRING
    }
  })

  return Professional.sync({ force: true })
}
