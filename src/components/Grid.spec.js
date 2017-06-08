import React from 'react'
import expect, {createSpy} from 'expect'
import {shallow} from 'enzyme'
import {PLAYER_1} from '../constants'
import Grid from './Grid'
import Cell from './Cell'

describe('<Grid />', function () {
  it('Renders <div> as main container', function () {
    const wrapper = shallow(<Grid data={{}} width={1} height={1} />)
    expect(wrapper.type()).toEqual('div')
  })

  it('Renders width * height <Cell />\'s', function () {
    const wrapper = shallow(<Grid data={{}} width={7} height={3} />)
    expect(wrapper.find(Cell).length).toEqual(21)
  })

  it('Defines grid display on main container', function () {
    const wrapper = shallow(<Grid data={{}} width={1} height={1} />)
    expect(wrapper.props().style.display).toEqual('grid')
  })

  it('Maps `width` property to css grid column count', function () {
    const wrapper = shallow(<Grid data={{}} width={7} height={3} />)
    expect(wrapper.props().style.gridTemplateColumns).toContain(`repeat(7`)
  })

  it('Limits element width accordingly to `cellSize` and `width` props', function () {
    const cellSize = 5
    const width = 7
    const wrapper = shallow(<Grid data={{}} width={width} height={3} cellSize={cellSize} />)
    const totalWidth = width * (cellSize + 1) - 1
    expect(wrapper.props().style.width).toEqual(`${totalWidth}px`)
  })

  it('Defaults `cellSize` to 15', function () {
    expect(Grid.defaultProps.cellSize).toEqual(15)
  })

  it('Defaults `offsetX` to 0', function () {
    expect(Grid.defaultProps.offsetX).toEqual(0)
  })

  it('Defaults `offsetY` to 0', function () {
    expect(Grid.defaultProps.offsetY).toEqual(0)
  })

  it('Defaults `onClick` to noop', function () {
    expect(Grid.defaultProps.onClick).toBeA('function')
  })

  it('Passes down `cellSize` to <Cell />\'s `size`', function () {
    const wrapper = shallow(<Grid data={{}} width={1} height={1} cellSize={7} />)
    expect(wrapper.find(Cell).props().size).toEqual(7)
  })

  it('Passes down `onClick` prop to <Cell />', function () {
    const onClickSpy = createSpy()
    const wrapper = shallow(<Grid data={{}} width={1} height={1} onClick={onClickSpy} />)
    expect(wrapper.find(Cell).props().onClick).toEqual(onClickSpy)
  })

  it('Maps data to `marked` prop of <Cell />', function () {
    const wrapper = shallow(<Grid data={{0: {0: PLAYER_1}}} width={1} height={1} />)
    expect(wrapper.find(Cell).props().marked).toEqual(PLAYER_1)
  })

  it('offsetX affects value passed to <Cell /> marked property', function () {
    const wrapper = shallow(<Grid data={{1: {0: PLAYER_1}}} offsetX={1} width={1} height={1} />)
    expect(wrapper.find(Cell).props().marked).toEqual(PLAYER_1)
  })

  it('offsetX affects <Cell /> `x` property', function () {
    const wrapper = shallow(<Grid data={{}} offsetX={7} width={1} height={1} />)
    expect(wrapper.find(Cell).props().x).toEqual(7)
  })

  it('offsetX affects value passed to <Cell /> marked property', function () {
    const wrapper = shallow(<Grid data={{0: {1: PLAYER_1}}} offsetY={1} width={1} height={1} />)
    expect(wrapper.find(Cell).props().marked).toEqual(PLAYER_1)
  })

  it('offsetX affects <Cell /> `y` property', function () {
    const wrapper = shallow(<Grid data={{}} offsetY={7} width={1} height={1} />)
    expect(wrapper.find(Cell).props().y).toEqual(7)
  })
})
