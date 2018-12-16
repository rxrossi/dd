import React from "react"

const VIEW_TYPES = {
  CREATE: "CREATE",
  LIST: "LIST",
  DELETE: "DELETE"
}

const DefaultDelete = ({ selectedEntityName, onConfirm, onCancel }) => (
  <div>
    Removendo {selectedEntityName}
    <button onClick={onConfirm}>Remover</button>
    <button onClick={onCancel}>Cancelar</button>
  </div>
)

export default ({
  List,
  Create,
  Delete = DefaultDelete,
  model,
  includes = {}
}) => {
  return class withCrud extends React.Component {
    state = {
      entities: [],
      loading: true,
      view: VIEW_TYPES.LIST,
      selectedId: null
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
            entities: [...state.entities, entity.get({ plain: true })],
            view: VIEW_TYPES.LIST
          }))
        })
    }

    removeEntity = id => {
      model
        .find({
          where: {
            id
          }
        })
        .then(entity => entity.destroy())
        .then(() => {
          this.setState(state => {
            const filteredEntities = state.entities.filter(
              entity => entity.id !== id
            )
            return {
              entities: filteredEntities,
              view: VIEW_TYPES.LIST
            }
          })
        })
    }

    setView = view => {
      this.setState({ view })
    }

    render() {
      const {
        entities,
        loading,
        view,
        selectedId,
        selectedEntityName
      } = this.state

      const views = {
        [VIEW_TYPES.CREATE]: <Create add={this.addEntity} />,
        [VIEW_TYPES.LIST]: (
          <List
            entities={entities}
            loading={loading}
            onDeleteClick={({ id, name }) =>
              this.setState({
                view: VIEW_TYPES.DELETE,
                selectedId: id,
                selectedEntityName: name
              })
            }
          />
        ),
        [VIEW_TYPES.DELETE]: (
          <Delete
            onConfirm={() => this.removeEntity(selectedId)}
            onCancel={() => this.setView(VIEW_TYPES.LIST)}
            selectedEntityName={selectedEntityName}
          />
        )
      }

      return (
        <div>
          <div>
            <button
              disabled={view === VIEW_TYPES.CREATE}
              onClick={() => this.setView(VIEW_TYPES.CREATE)}
            >
              Novo
            </button>
            <button
              disabled={view === VIEW_TYPES.LIST}
              onClick={() => this.setView(VIEW_TYPES.LIST)}
            >
              Listar
            </button>
          </div>
          {views[view]}
        </div>
      )
    }
  }
}
