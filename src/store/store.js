import {createStore, combineReducers} from 'redux'
import {gridData} from './reducers'

const reducers = combineReducers({
  grid: combineReducers({
    data: gridData
  })
})

function rootReducer (state, action) {
  if (action.type === 'RESET') {
    state = undefined
  }
  return reducers(state, action)
}

export default function createAppStorage (...args) {
  return createStore(rootReducer, ...args)
}
