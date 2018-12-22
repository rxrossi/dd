import React from 'react'

const VIEW_TYPES = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  LIST: 'LIST',
  DELETE: 'DELETE',
}

const DefaultDelete = ({ selectedEntityName, onConfirm, onCancel }) => (
  <div>
    Deseja remover {selectedEntityName} ?
    <button onClick={onConfirm}>Remover</button>
    <button onClick={onCancel}>Cancelar</button>
  </div>
)

export default ({
  List,
  Create,
  Update,
  Delete = DefaultDelete,
  model,
  includes = {},
}) => {
  return class withCrud extends React.Component {
    state = {
      entities: [],
      loading: true,
      view: VIEW_TYPES.LIST,
      selectedId: null,
    }

    componentDidMount() {
      model.findAll(includes).then(entities =>
        this.setState({
          entities,
          loading: false,
        })
      )
    }

    addEntity = entity => {
      model
        .create(entity)
        .then(entity =>
          model.find({
            where: {
              id: entity.id,
            },
            ...includes,
          })
        )
        .then(entity => {
          this.setState(state => ({
            entities: [...state.entities, entity],
            view: VIEW_TYPES.LIST,
            selectedId: null,
            selectedEntityName: null,
          }))
        })
    }

    removeEntity = id => {
      model
        .find({
          where: {
            id,
          },
        })
        .then(entity => entity.destroy())
        .then(() => {
          this.setState(state => {
            const filteredEntities = state.entities.filter(
              entity => entity.id !== id
            )
            return {
              entities: filteredEntities,
              view: VIEW_TYPES.LIST,
              selectedId: null,
              selectedEntityName: null,
            }
          })
        })
    }

    updateEntity = entity => {
      model
        .find({
          where: {
            id: entity.id,
          },
        })
        .then(model => model.update(entity))
        .then(entity =>
          model.find({
            where: {
              id: entity.id,
            },
            ...includes,
          })
        )
        .then(updatedEntity => {
          this.setState(state => {
            const updateEntitiesList = state.entities.map(entity => {
              return entity.id === updatedEntity.id ? updatedEntity : entity
            })
            return {
              entities: updateEntitiesList,
              view: VIEW_TYPES.LIST,
              selectedId: null,
              selectedEntityName: null,
            }
          })
        })
    }

    setView = (view, selectedId = null, selectedEntityName = null) => {
      this.setState({ view, selectedId, selectedEntityName })
    }

    render() {
      const {
        entities,
        loading,
        view,
        selectedId,
        selectedEntityName,
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
                selectedEntityName: name,
              })
            }
            onUpdateClick={({ id }) =>
              this.setState({
                view: VIEW_TYPES.UPDATE,
                selectedId: id,
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
        ),
        [VIEW_TYPES.UPDATE]: selectedId ? (
          <Update
            update={this.updateEntity}
            onCancel={() => this.setView(VIEW_TYPES.LIST)}
            entity={entities
              .find(({ id }) => id === selectedId)
              .get({ plain: true })}
          />
        ) : null,
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
