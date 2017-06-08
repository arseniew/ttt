import {MARK_GRID_CELL} from '../constants'

export function markGridCell (x, y, playerId) {
  return {
    type: MARK_GRID_CELL,
    payload: {x, y, playerId}
  }
}
