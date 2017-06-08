import React, {Component} from 'react'
import {object, func} from 'prop-types'
import Grid from './Grid'

class App extends Component {
  render () {
    const {grid, onClick} = this.props
    return (
      <Grid
        width={30}
        height={30}
        offsetX={0}
        offsetY={0}
        data={grid.data}
        onClick={onClick}
      />
    )
  }
}

App.propTypes = {
  grid: object.isRequired,
  onClick: func.isRequired
}

export default App
