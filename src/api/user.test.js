/* eslint-env jest */
import fetchMock from 'fetch-mock'
import { GetUser } from './user'

describe('GetUser() using Promises', () => {
  fetchMock.get(
    '*',
    {
      id: '1',
      name: 'John Snow',
    },
  )
  it('should load user data', () => {
    GetUser('1').then((data) => {
      expect(data).toBeDefined()
      expect(data.id).toBe('1')
      expect(data.name).toBe('John Snow')
    })
  })
})
