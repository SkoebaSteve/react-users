/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme' //using beta: https://github.com/producthunt/chai-enzyme/issues/199
import React from 'react'
import App from './'

chai.use(chaiEnzyme())

it('Test the default values.', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('div')).to.have.className('app')
})