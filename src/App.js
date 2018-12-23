import React from 'react'
import { Provider } from 'reakit'
import db from './models'
import { hot } from 'react-hot-loader'
import Router from './Router'
import theme from './theme'

class App extends React.Component {
  state = {
    startingDb: true,
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
      <Provider theme={theme}>
        <Router />
      </Provider>
    )
  }
}

export default hot(module)(App)
