/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-unused-expressions: 0 */
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme' // using beta: https://github.com/producthunt/chai-enzyme/issues/199
import React from 'react'
import { BackIcon } from './'

chai.use(chaiEnzyme())

// back icon test
it('Has the default values.', () => {
  const wrapper = shallow(<BackIcon />)
  expect(wrapper).to.have.attr('width', '20px')
  expect(wrapper.find('title')).to.have.text('back')
})

it('Allows for a width to be set', () => {
  const wrapper = shallow(<BackIcon width="12345px" />)
  expect(wrapper).to.have.attr('width', '12345px')
})

it('Allows for a title to be set', () => {
  const wrapper = shallow(<BackIcon title="forward" />)
  expect(wrapper.find('title')).to.have.text('forward')
})
