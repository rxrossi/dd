import React from 'react'
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
        <h2>{professional.name}</h2>
        Total: {totalValue} <br />
        Comissão: {commission}
        <hr />
        <input
          type="month"
          onChange={this.onMonthSelect}
          name="month"
          defaultValue={getYearAndMonthStr(new Date())}
        />
        {professional.sales.map(entity => (
          <div key={entity.id}>
            Serviço: {entity.name} Value: {entity.value}
          </div>
        ))}
      </div>
    ) : null
  }
}

export default Sales
