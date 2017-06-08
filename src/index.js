import React from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {markGridCell} from './store/actions'
import createAppStorage from './store/store'
import App from './components/App'
import {PLAYER_1} from './constants'

const store = createAppStorage()

const AppContainer = connect(
  ({grid}) => ({grid}),
  (dispatch) => ({
    onClick: (x, y) => dispatch(markGridCell(x, y, PLAYER_1))
  })
)(App)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
