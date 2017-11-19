/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-unused-expressions: 0 */
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme' // using beta: https://github.com/producthunt/chai-enzyme/issues/199
import React from 'react'
import User from './'

chai.use(chaiEnzyme())

it('Has the default values.', () => {
  const wrapper = shallow(<User
    id="2"
    name="Steef"
    caption="all round sound guy"
    avatar="https://avatars2.githubusercontent.com/u/3404599?s=400&v=4"
  />)
  expect(wrapper.find('figure')).to.have.className('user')
  expect(wrapper.find('img')).to.have.attr('src', 'https://avatars2.githubusercontent.com/u/3404599?s=400&v=4')
  expect(wrapper.find('figcaption')).to.have.text('all round sound guy')
})

it('Allows for a large version', () => {
  const wrapper = shallow(<User
    id="2"
    name="Steef"
    caption="all round sound guy"
    avatar="https://avatars2.githubusercontent.com/u/3404599?s=400&v=4"
    large
  />)
  expect(wrapper.find('figure')).to.have.className('user large')
})
