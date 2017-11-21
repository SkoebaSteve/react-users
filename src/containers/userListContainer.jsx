/* eslint no-unused-vars: 0 */
/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/yannickcr/eslint-plugin-react/issues/1389
/* eslint-disable react/no-typos */
import React from 'react'
import UserList from '../components/userList'
import { GetUsers } from '../api/user'

class UserListContainer extends React.Component {
  state = { users: [] }
  componentDidMount() {
    GetUsers().then((users) => {
      this.setState({ users })
    })
  }
  render() {
    return <UserList users={this.state.users} />
  }
}

export default UserListContainer
