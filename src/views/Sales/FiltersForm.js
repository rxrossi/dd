import React from 'react'
import { Form, FormSpy } from 'react-final-form'
import EntitySelect from '../../commons/EntitySelect'
import Field from '../../commons/Field'
import db from '../../models'

function getYearAndMonthStr(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}`
}

function getMonthRange(date) {
  const currentDate = new Date(date)
  if (isNaN(currentDate.getTime())) {
    return []
  }

  const nextMonth = new Date(date)
  nextMonth.setMonth(currentDate.getMonth() + 1)

  return [
    new Date(getYearAndMonthStr(currentDate)),
    new Date(getYearAndMonthStr(nextMonth)),
  ]
}

class FiltersForm extends React.Component {
  render() {
    return (
      <Form
        onSubmit={() => null}
        initialValues={{
          month: getYearAndMonthStr(new Date()),
        }}
      >
        {() => {
          return (
            <tr>
              <th>
                <EntitySelect
                  label="Serviço"
                  name="service"
                  entityName="Service"
                />
              </th>
              <th>
                <EntitySelect
                  label="Profissional"
                  name="professional"
                  entityName="Professional"
                />
              </th>
              <th>
                <EntitySelect
                  label="Cliente"
                  name="client"
                  entityName="Client"
                />
              </th>
              <th>
                <Field label="Data" name="month" type="month" />
              </th>
              <th> Valor </th>
              <th />

              <FormSpy
                onChange={({
                  values: { month, professional, client, service },
                }) => {
                  const where = {}
                  if (month) {
                    where.date = {
                      [db.Sequelize.Op.between]: getMonthRange(new Date(month)),
                    }
                  }

                  if (service) {
                    where.serviceId = {
                      [db.Sequelize.Op.eq]: service,
                    }
                  }

                  if (professional) {
                    where.professionalId = {
                      [db.Sequelize.Op.eq]: professional,
                    }
                  }

                  if (client) {
                    where.clientId = {
                      [db.Sequelize.Op.eq]: client,
                    }
                  }

                  this.props.setWhereFilters(where)
                }}
              />
            </tr>
          )
        }}
      </Form>
    )
  }
}

export default FiltersForm
