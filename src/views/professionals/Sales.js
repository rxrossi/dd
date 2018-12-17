import React from "react"
import db from "../../models"

class Sales extends React.Component {
  state = {
    sales: [],
    totalValue: null,
    commission: null
  }

  componentDidMount() {
    db.Professional.findById(this.props.professionalId, {
      include: db.Sale
    }).then(entity => {
      const sales = entity.sales
      const totalValue = sales.reduce((acc, curr) => acc + curr.value, 0)
      const commission = (totalValue / 100) * entity.percentage
      this.setState({
        sales,
        totalValue,
        commission
      })
    })
  }

  render() {
    const { sales, totalValue, commission } = this.state
    return (
      <div>
        Total: {totalValue} <br />
        Comissão: {commission}
        <hr />
        {sales.map(entity => (
          <div key={entity.id}>
            Serviço: {entity.name} Value: {entity.value}
          </div>
        ))}
      </div>
    )
  }
}

export default Sales
