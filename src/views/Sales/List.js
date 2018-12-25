import React from 'react'
import { Table, Button } from 'reakit'
import DateDisplay from '../../commons/DateDisplay'
import FiltersForm from './FiltersForm'

function getTotal(entities) {
  return entities.reduce((acc, curr) => {
    return acc + curr.value
  }, 0)
}

function getTotalComission(entities) {
  return entities.reduce((acc, curr) => {
    return acc + (curr.value / 100) * curr.professional.percentage
  }, 0)
}

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
        <tfoot>
          <tr>
            <td colSpan={4} />
            <td>
              <Table width="100%" margin={0}>
                <thead>
                  <tr>
                    <th>Total</th>
                    <th>Comissão</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td align="right">{getTotal(entities)}</td>
                    <td align="right">{getTotalComission(entities)}</td>
                  </tr>
                </tbody>
              </Table>
            </td>
            <td />
          </tr>
        </tfoot>
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
