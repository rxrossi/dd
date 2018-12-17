import React, { Context, Component, Fragment } from "react"

const VIEWS_TYPES = {
  PROFESSIONAL_CRUD: "PROFESSIONAL_CRUD",
  SALES_CRUD: "SALES_CRUD"
}

const views = {
  [VIEWS_TYPES.PROFESSIONAL_CRUD]: {
    component: require("../views/Professionals/CRUD").default,
    label: "Profissionais"
  },
  [VIEWS_TYPES.SALES_CRUD]: {
    component: require("../views/Sales/CRUD").default,
    label: "Vendas"
  }
}

class Router extends Component {
  state = {
    view: VIEWS_TYPES.PROFESSIONAL_CRUD,
    params: {}
  }

  setView = (view, params) => {
    this.setState({
      view,
      params
    })
  }

  render() {
    const { component: View, label } = views[this.state.view]

    const buttons = Object.entries(views)

    return (
      <Fragment>
        {buttons.map(([VIEW_TYPE, { label }]) => (
          <button
            key={label}
            onClick={() => this.setView(VIEW_TYPE)}
            disabled={VIEW_TYPE === this.state.view}
          >
            {label}
          </button>
        ))}
        <hr />
        <h1>{label} </h1>
        <View {...this.state.params} />
      </Fragment>
    )
  }
}

export default Router
