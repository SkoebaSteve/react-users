/* eslint-env jest */
/* eslint no-unused-expressions: 0 */
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme' // using beta: https://github.com/producthunt/chai-enzyme/issues/199
import React from 'react'
import UserList from './'
import Header from '../header'

chai.use(chaiEnzyme())

const users = [
  {
    id: '1',
    name: 'John Snow',
    description: 'John Snow is a very kind person. He spends his whole life to guard the great wall and keep the monsters outside.',
    avatar: 'http://i.pravatar.cc/150?img=70',
  },
  {
    id: '2',
    name: 'Barack Obama',
    description: 'Barack is the 44th president of the United States.',
    avatar: 'http://i.pravatar.cc/150?img=69',
  },
  {
    id: '3',
    name: 'Donald Duck',
    description: 'It\'s just a duck.',
    avatar: 'http://i.pravatar.cc/150?img=47',
  },
]

it('Has the default values.', () => {
  const wrapper = shallow(<UserList users={users} />)
  expect(wrapper).contain(<Header title="directory" />)
  expect(wrapper).to.have.exactly(3).descendants('li')
})
