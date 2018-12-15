import React from "react"

export default ({ List, setupModel }) => {
  return class withCrud extends React.Component {
    state = {
      entities: [],
      loading: true
    }

    componentDidMount() {
      setupModel().then(model => {
        model.findAll().then(entities => {
          console.log("bb", entities)
          this.setState({ entities, loading: false })
        })
      })
    }

    render() {
      const { entities, loading } = this.state
      return <List entities={entities} loading={loading} />
    }
  }
}
