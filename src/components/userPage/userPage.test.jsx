/* eslint-env jest */
/* eslint no-unused-expressions: 0 */
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme' // using beta: https://github.com/producthunt/chai-enzyme/issues/199
import React from 'react'
import UserPage from './'
import Header from '../header'
import User from '../user'

chai.use(chaiEnzyme())

const user = {
  id: '1',
  name: 'John Snow',
  description: 'John Snow is a very kind person. He spends his whole life to guard the great wall and keep the monsters outside.',
  avatar: 'http://i.pravatar.cc/150?img=70',
}

it('Has the default values.', () => {
  const wrapper = shallow(<UserPage {...user} />)
  expect(wrapper).contain(<Header title="John Snow" icon />)
  expect(wrapper).to.have.descendants(User)
})
