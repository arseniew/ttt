import {
  SET_WINNING_PLAYER,
  SET_WINNING_LINE,
  MARK_GRID_CELL
} from '../constants'

export function winPlayer (state, {type, payload}) {
  switch (type) {
    case SET_WINNING_PLAYER:
      return payload
    default:
      return state
  }
}

export function winLine (state, {type, payload}) {
  switch (type) {
    case SET_WINNING_LINE:
      return payload
    default:
      return state
  }
}

export function gridData (state = {}, {type, payload}) {
  switch (type) {
    case MARK_GRID_CELL:
      const {x, y, playerId} = payload
      if (state[x]) {
        const col = {...state[x], [y]: playerId}
        return {...state, [x]: col}
      } else {
        return {...state, [x]: {[y]: playerId}}
      }
    default:
      return state
  }
}
