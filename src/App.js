import React from "react"
import db from "./models"
import { hot } from "react-hot-loader"
import Router from "./Router"

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
    return this.state.startingDb ? <div>Starting database</div> : <Router />
  }
}

export default hot(module)(App)
