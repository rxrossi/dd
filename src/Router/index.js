import React, { createContext, Component, Fragment } from 'react'
import { styled, Block as BaseBlock, Button as BaseButton } from 'reakit'
import { palette } from 'styled-tools'

const Button = styled(BaseButton)`
  margin: 0;
  border-radius: 0;
`

const Block = styled(BaseBlock)`
  background: ${palette('primary', 0)};
`

const RouterContext = createContext()

const VIEW_TYPES = {
  PROFESSIONAL_CRUD: 'PROFESSIONAL_CRUD',
  SALES_CRUD: 'SALES_CRUD',
}

const views = {
  [VIEW_TYPES.SALES_CRUD]: {
    component: require('../views/Sales/CRUD').default,
    label: 'Vendas',
  },
  [VIEW_TYPES.PROFESSIONAL_CRUD]: {
    component: require('../views/Professionals/CRUD').default,
    label: 'Profissionais',
  },
}

class Router extends Component {
  state = {
    view: VIEW_TYPES.SALES_CRUD,
    params: {},
  }

  setView = (view, params) => {
    this.setState({
      view,
      params,
    })
  }

  render() {
    const { component: View } = views[this.state.view]

    const buttons = Object.entries(views)

    return (
      <RouterContext.Provider
        value={{
          setView: this.setView,
          VIEW_TYPES,
        }}
      >
        <Fragment>
          <Block>
            {buttons.map(([VIEW_TYPE, { label }]) =>
              label ? (
                <Button
                  key={label}
                  onClick={() => this.setView(VIEW_TYPE)}
                  disabled={VIEW_TYPE === this.state.view}
                >
                  {label}
                </Button>
              ) : null
            )}
          </Block>
          <View {...this.state.params} />
        </Fragment>
      </RouterContext.Provider>
    )
  }
}

export const { Consumer: RouterConsumer } = RouterContext
export default Router
