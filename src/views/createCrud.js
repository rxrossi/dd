import React from "react"

export default ({ List, Create, setupModel }) => {
  return class withCrud extends React.Component {
    state = {
      entities: [],
      loading: true
    }

    componentDidMount() {
      setupModel().then(model => {
        model.findAll().then(entities => {
          this.setState({ entities, loading: false })
        })
      })
    }

    addEntity = entity => {
      setupModel().then(model => {
        model.create(entity).then(entity => {
          this.setState(state => {
            return {
              entities: [...state.entities, entity.get({ plain: true })]
            }
          })
        })
      })
    }

    render() {
      const { entities, loading } = this.state

      return (
        <div>
          <Create add={this.addEntity} />
          <List entities={entities} loading={loading} />
        </div>
      )
    }
  }
}
