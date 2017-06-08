import React, {PureComponent} from 'react'
import {number, func} from 'prop-types'
import {PLAYER_1, PLAYER_2} from '../constants'
import CircleIcon from './CircleIcon'
import CrossIcon from './CrossIcon'

const playerToIconMap = {
  [PLAYER_1]: CircleIcon,
  [PLAYER_2]: CrossIcon
}

class Cell extends PureComponent {
  constructor () {
    super()
    this.onClickHandler = this.onClickHandler.bind(this)
  }
  onClickHandler () {
    const {x, y, onClick} = this.props
    onClick(x, y)
  }
  render () {
    const {marked, size} = this.props
    const Icon = playerToIconMap[marked]
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: `#fff`
    }
    return (
      <div style={style} onClick={this.onClickHandler}>
        {Icon && <Icon />}
      </div>
    )
  }
}

Cell.defaultProps = {
  size: 15,
  onClick: () => {}
}

Cell.propTypes = {
  marked: number,
  size: number,
  onClick: func,
  x: number,
  y: number
}

export default Cell
