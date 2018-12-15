import React from "react"

export default ({ List, Create, model }) => {
  return class withCrud extends React.Component {
    state = {
      entities: [],
      loading: true
    }

    componentDidMount() {
      model
        .findAll()
        .then(entities => this.setState({ entities, loading: false }))
    }

    addEntity = entity => {
      model.create(entity).then(entity =>
        this.setState(state => ({
          entities: [...state.entities, entity.get({ plain: true })]
        }))
      )
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
