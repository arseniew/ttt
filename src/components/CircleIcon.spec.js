import React from 'react'
import expect from 'expect'
import {shallow} from 'enzyme'
import CircleIcon from './CircleIcon'

describe('<CircleIcon />', function () {
  it('Renders <span> as a main container', function () {
    const wrapper = shallow(<CircleIcon />)
    expect(wrapper.type()).toEqual('span')
  })

  it('Returns `O` as a text content', function () {
    const wrapper = shallow(<CircleIcon />)
    expect(wrapper.text()).toEqual('O')
  })
})
