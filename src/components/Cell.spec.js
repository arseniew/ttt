import React from 'react'
import expect, {createSpy} from 'expect'
import {shallow} from 'enzyme'
import Cell from './Cell'
import CircleIcon from './CircleIcon'
import CrossIcon from './CrossIcon'
import {PLAYER_1, PLAYER_2} from '../constants'

describe('<Cell />', function () {
  it('Renders <div> as a main container', function () {
    const wrapper = shallow(<Cell />)
    expect(wrapper.type()).toEqual('div')
  })

  it('Maps `size` property to container height', function () {
    const wrapper = shallow(<Cell size={20} />)
    expect(wrapper.props().style.height).toEqual('20px')
  })

  it('Maps `size` property to container width', function () {
    const wrapper = shallow(<Cell size={20} />)
    expect(wrapper.props().style.width).toEqual('20px')
  })

  it('Defaults `size` property to 15', function () {
    const wrapper = shallow(<Cell />)
    expect(wrapper.props().style.width).toEqual('15px')
  })

  it('Maps `marked` property with PLAYER_1 to CircleIcon', function () {
    const wrapper = shallow(<Cell marked={PLAYER_1} />)
    expect(wrapper.find(CircleIcon).length).toEqual(1)
    expect(wrapper.find(CrossIcon).length).toEqual(0)
  })

  it('Maps `marked` property with PLAYER_2 to CrossIcon', function () {
    const wrapper = shallow(<Cell marked={PLAYER_2} />)
    expect(wrapper.find(CrossIcon).length).toEqual(1)
    expect(wrapper.find(CircleIcon).length).toEqual(0)
  })

  it('Any other `marked` value will not render any Icon element', function () {
    const wrapper = shallow(<Cell marked={null} />)
    expect(wrapper.children().length).toEqual(0)
  })

  it('Invokes `onClick` property with passed on `x` and `y` props when component clicked', function () {
    const onClickSpy = createSpy()
    const wrapper = shallow(<Cell onClick={onClickSpy} x={5} y={6} />)
    expect(onClickSpy).toNotHaveBeenCalled()
    wrapper.simulate('click')
    expect(onClickSpy).toHaveBeenCalledWith(5, 6)
  })
})
