import React, {Component} from 'react'
import {number, object, func} from 'prop-types'
import Cell from './Cell'

class Grid extends Component {
  render () {
    const {data, width, height, cellSize, onClick, offsetX, offsetY} = this.props

    const style = {
      display: 'grid',
      gridRowGap: '1px',
      gridColumnGap: '1px',
      gridTemplateColumns: `repeat(${width}, ${cellSize}px)`,
      backgroundColor: '#333',
      width: `${width * (cellSize + 1) - 1}px`
    }

    let fields = []
    for (let y = offsetY; y < height + offsetY; y += 1) {
      for (let x = offsetX; x < width + offsetX; x += 1) {
        fields.push(
          <Cell
            key={`${x}.${y}`}
            marked={data[x] && data[x][y]}
            size={cellSize}
            onClick={onClick}
            x={x}
            y={y}
          />
        )
      }
    }

    return (
      <div style={style}>
        {fields}
      </div>
    )
  }
}

Grid.defaultProps = {
  cellSize: 15,
  onClick: () => {},
  offsetX: 0,
  offsetY: 0
}

Grid.propTypes = {
  cellSize: number,
  data: object.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  offsetX: number,
  offsetY: number,
  onClick: func
}

export default Grid
