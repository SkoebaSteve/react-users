/* eslint-env jest */
import fetchMock from 'fetch-mock'
import { GetUsers } from './user'

describe('GetUsers() using Promises', () => {
  fetchMock.get(
    '*',
    {
      users: [
        {
          id: '1',
          name: 'John Snow',
        },
        {
          id: '2',
          name: 'Barack Obama',
        },
      ],
    },
  )
  it('should load user data', () => {
    GetUsers().then((data) => {
      expect(data).toBeDefined()
      expect(data.users[0].id).toBe('1')
      expect(data.users[1].name).toBe('Barack Obama')
    })
  })
})
