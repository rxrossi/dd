import React from "react"

export default ({ List, Create, model, includes = {} }) => {
  return class withCrud extends React.Component {
    state = {
      entities: [],
      loading: true
    }

    componentDidMount() {
      model
        .findAll(includes)
        .then(entities => this.setState({ entities, loading: false }))
    }

    addEntity = entity => {
      model
        .create(entity)
        .then(entity =>
          model.find({
            where: {
              id: entity.id
            },
            ...includes
          })
        )
        .then(entity => {
          this.setState(state => ({
            entities: [...state.entities, entity.get({ plain: true })]
          }))
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
