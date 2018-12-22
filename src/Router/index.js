import React, { createContext, Component, Fragment } from 'react'

const RouterContext = createContext()

const VIEW_TYPES = {
  PROFESSIONAL_CRUD: 'PROFESSIONAL_CRUD',
  SALES_CRUD: 'SALES_CRUD',
  PROFESSIONAL_SALES: 'PROFESSIONAL_SALES',
}

const views = {
  [VIEW_TYPES.PROFESSIONAL_CRUD]: {
    component: require('../views/Professionals/CRUD').default,
    label: 'Profissionais',
  },
  [VIEW_TYPES.SALES_CRUD]: {
    component: require('../views/Sales/CRUD').default,
    label: 'Vendas',
  },
  [VIEW_TYPES.PROFESSIONAL_SALES]: {
    component: require('../views/Professionals/Sales').default,
  },
}

class Router extends Component {
  state = {
    view: VIEW_TYPES.PROFESSIONAL_CRUD,
    params: {},
  }

  setView = (view, params) => {
    this.setState({
      view,
      params,
    })
  }

  render() {
    const { component: View, label } = views[this.state.view]

    const buttons = Object.entries(views)

    return (
      <RouterContext.Provider
        value={{
          setView: this.setView,
          VIEW_TYPES,
        }}
      >
        <Fragment>
          {buttons.map(([VIEW_TYPE, { label }]) =>
            label ? (
              <button
                key={label}
                onClick={() => this.setView(VIEW_TYPE)}
                disabled={VIEW_TYPE === this.state.view}
              >
                {label}
              </button>
            ) : null
          )}
          <hr />
          {label ? <h1>{label} </h1> : null}
          <View {...this.state.params} />
        </Fragment>
      </RouterContext.Provider>
    )
  }
}

export const { Consumer: RouterConsumer } = RouterContext
export default Router
