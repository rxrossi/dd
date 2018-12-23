import React from 'react'
import { Input, Field, Label, Table, Heading, Paragraph, Card } from 'reakit'
import db from '../../models'

function processEntity(entity) {
  const sales = entity.sales
  const totalValue = sales.reduce((acc, curr) => acc + curr.value, 0)
  const commission = (totalValue / 100) * entity.percentage

  return {
    sales,
    totalValue,
    commission,
    professional: entity.get({ plain: true }),
  }
}

function getYearAndMonthStr(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}`
}

function getMonthRange(date) {
  const currentDate = new Date(date)

  const nextMonth = new Date(date)
  nextMonth.setMonth(currentDate.getMonth() + 1)

  return [
    new Date(getYearAndMonthStr(currentDate)),
    new Date(getYearAndMonthStr(nextMonth)),
  ]
}

class Sales extends React.Component {
  state = {
    totalValue: null,
    commission: null,
    professional: null,
  }

  componentDidMount() {
    this.getData(getMonthRange(new Date()))
  }

  onMonthSelect = e => {
    this.getData(getMonthRange(new Date(e.target.value)))
  }

  getData = dateRange => {
    db.Professional.findById(this.props.professionalId, {
      include: {
        model: db.Sale,
        where: {
          date: {
            [db.Sequelize.Op.between]: dateRange,
          },
        },
        required: false,
      },
    }).then(entity => {
      this.setState(processEntity(entity))
    })
  }

  render() {
    const { totalValue, commission, professional } = this.state
    return professional ? (
      <div>
        <Card>
          <Heading>{professional.name}</Heading>
          <Paragraph>Total: {totalValue}</Paragraph>
          <Paragraph>Comissão: {commission}</Paragraph>
        </Card>
        <Field>
          <Label>Selecionar mês</Label>
          <Input
            type="month"
            onChange={this.onMonthSelect}
            name="month"
            defaultValue={getYearAndMonthStr(new Date())}
          />
        </Field>
        <Table>
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {professional.sales.map(entity => (
              <tr key={entity.id}>
                <td>{entity.name}</td>
                <td align="right">{entity.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    ) : null
  }
}

export default Sales
