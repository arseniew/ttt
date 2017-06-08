import React from 'react'
import expect from 'expect'
import {shallow} from 'enzyme'
import CrossIcon from './CrossIcon'

describe('<CrossIcon />', function () {
  it('Renders <span> as a main container', function () {
    const wrapper = shallow(<CrossIcon />)
    expect(wrapper.type()).toEqual('span')
  })

  it('Returns `O` as a text content', function () {
    const wrapper = shallow(<CrossIcon />)
    expect(wrapper.text()).toEqual('X')
  })
})
