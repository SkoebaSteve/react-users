/* eslint no-unused-vars: 0 */
import React from 'react'
import style from './style'
import UserList from '../components/userList'
import UserPage from '../components/userPage'

export default class App extends React.Component {
  users = [
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
  render() {
    return (
      <div className="app">
        <UserList users={this.users} />
        <UserPage {...this.users[0]} />
        <style jsx global>{style}</style>
      </div>
    )
  }
}
