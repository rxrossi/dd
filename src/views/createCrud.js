import React from 'react'
import { styled, Block, Button, Paragraph, Flex } from 'reakit'
import { VIEW_TYPES } from '../constants'

const Container = styled(Block)`
  background: #fff;
`

const DefaultDelete = ({ selectedEntityName, onConfirm, onCancel }) => (
  <Block padding="1.5rem">
    <Flex justifyContent="center" margin="1.5rem">
      <Paragraph>
        Deseja remover <b>{selectedEntityName}</b> ?
      </Paragraph>
    </Flex>
    <Flex justifyContent="center">
      <Button onClick={onConfirm} palette="danger">
        Remover
      </Button>
      <Button onClick={onCancel}>Cancelar</Button>
    </Flex>
  </Block>
)

export default ({
  List,
  Create,
  Update,
  Delete = DefaultDelete,
  model,
  initialView = VIEW_TYPES.LIST,
  include,
}) => {
  return class withCrud extends React.Component {
    state = {
      entities: [],
      loading: true,
      view: initialView,
      selectedId: null,
      where: {},
    }

    componentDidMount() {
      // this.getEntities()
    }

    setWhereFilters = where => {
      this.setState(
        {
          where,
        },
        this.getEntities
      )
    }

    getEntities = () => {
      model
        .findAll({
          include,
          where: this.state.where,
        })
        .then(entities =>
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
            include,
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
            ...include,
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
        [VIEW_TYPES.CREATE]: (
          <Create
            add={this.addEntity}
            onCancel={() => this.setView(VIEW_TYPES.LIST)}
          />
        ),
        [VIEW_TYPES.LIST]: (
          <List
            entities={entities}
            loading={loading}
            setWhereFilters={this.setWhereFilters}
            createNewView={() =>
              this.setState({
                view: VIEW_TYPES.CREATE,
              })
            }
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
          <Container>{views[view]}</Container>
        </div>
      )
    }
  }
}
