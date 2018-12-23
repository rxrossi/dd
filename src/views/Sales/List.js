import React from 'react'
import { Table, Button } from 'reakit'
import DateDisplay from '../../commons/DateDisplay'

const List = ({ entities, onDeleteClick, onUpdateClick, createNewView }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th> Serviço </th>
            <th> Profissional </th>
            <th> Data </th>
            <th> Valor </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {entities.map(({ id, value, name = '', professional, date }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{professional.name}</td>
              <td align="right">
                <DateDisplay date={date} />
              </td>
              <td align="right"> {value} </td>
              <td>
                <Button
                  palette="secondary"
                  onClick={() => onUpdateClick({ id, name })}
                >
                  Editar
                </Button>
                <Button
                  palette="danger"
                  onClick={() =>
                    onDeleteClick({
                      id,
                      name: `${name} por ${professional.name}`,
                    })
                  }
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '0 0.4rem',
        }}
      >
        <Button onClick={createNewView}>Criar nova</Button>
      </div>
    </div>
  )
}

export default List
