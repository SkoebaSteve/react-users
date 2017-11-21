/* eslint-env jest */
/* eslint no-unused-expressions: 0 */
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme' // using beta: https://github.com/producthunt/chai-enzyme/issues/199
import React from 'react'
import Header from './'

chai.use(chaiEnzyme())

it('Has the default values.', () => {
  const wrapper = shallow(<Header title="test" />)
  expect(wrapper.find('header')).to.have.className('header')
})

it('Shows the back button', () => {
  const wrapper = shallow(<Header title="test" icon />)
  expect(wrapper.find('nav')).to.exist
})
