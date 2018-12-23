import React from 'react'
import { Table, Button } from 'reakit'
import { RouterConsumer } from '../../Router'

function Entity({ entity: { id, name }, onDeleteClick, onUpdateClick }) {
  return (
    <tr>
      <td>{name}</td>
      <td align="right">
        <RouterConsumer>
          {({ setView, VIEW_TYPES }) => (
            <Button
              onClick={() =>
                setView(VIEW_TYPES.PROFESSIONAL_SALES, { professionalId: id })
              }
            >
              Ver vendas
            </Button>
          )}
        </RouterConsumer>
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

function List({ entities, onDeleteClick, onUpdateClick, createNewView }) {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
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

export default List
