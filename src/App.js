import React from "react"
import db from "./models"
import Professionals from "./views/Professionals"
import Sales from "./views/Sales"
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
        <div>
          <h1>Professionals</h1>
          <Professionals />
        </div>
        <hr />
        <div>
          <h1>Sales</h1>
          <Sales />
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
