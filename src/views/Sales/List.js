import React from 'react'
import { Table, Button } from 'reakit'
import DateDisplay from '../../commons/DateDisplay'
import FiltersForm from './FiltersForm'

const List = ({
  entities,
  onDeleteClick,
  onUpdateClick,
  createNewView,
  setWhereFilters,
}) => {
  return (
    <div>
      <Table>
        <thead>
          <FiltersForm setWhereFilters={setWhereFilters} />
        </thead>
        <tbody>
          {entities.map(({ id, value, name, professional, date, client }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{professional.name}</td>
              <td>{client.name}</td>
              <td align="right">
                <DateDisplay date={date} />
              </td>
              <td align="right"> {value} </td>
              <td align="right">
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
