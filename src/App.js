import React from "react"
import db from "./models"
import Professionals from "./views/professionals"
import { hot } from "react-hot-loader"

class App extends React.Component {
  state = {
    startingDb: true
  }

  componentDidMount() {
    db.sequelize.sync().then(() => {
      this.setState({ startingDb: false })
    })
  }

  render() {
    return this.state.startingDb ? (
      <div>Starting database</div>
    ) : (
      <div>
        <Professionals />
      </div>
    )
  }
}

export default hot(module)(App)
