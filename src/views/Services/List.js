import React from 'react'
import { Table, Button } from 'reakit'

function Entity({ entity: { id, name, value }, onDeleteClick, onUpdateClick }) {
  return (
    <tr>
      <td>{name}</td>
      <td align="right">{value}</td>
      <td align="right">
        <Button palette="secondary" onClick={() => onUpdateClick({ id, name })}>
          Editar
        </Button>
        <Button palette="danger" onClick={() => onDeleteClick({ id, name })}>
          Excluir
        </Button>
      </td>
    </tr>
  )
}

class List extends React.Component {
  componentDidMount() {
    this.props.setWhereFilters()
  }

  render() {
    const { entities, onDeleteClick, onUpdateClick, createNewView } = this.props
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th />
            </tr>
            {entities.map(entity => (
              <Entity
                key={entity.id}
                entity={entity}
                onDeleteClick={onDeleteClick}
                onUpdateClick={onUpdateClick}
              />
            ))}
          </thead>
          <tbody />
        </Table>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '0 0.4rem',
          }}
        >
          <Button onClick={createNewView}>Criar novo</Button>
        </div>
      </div>
    )
  }
}

export default List
