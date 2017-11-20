/* eslint no-unused-vars: 0 */
/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/yannickcr/eslint-plugin-react/issues/1389
/* eslint-disable react/no-typos */
/* eslint-disable react/prop-types */

import React from 'react'
import { string, object } from 'prop-types'
import UserPage from '../components/userPage'
import API from '../api'

class UserPageContainer extends React.Component {
  state = {
    user: false,
  }
  componentDidMount() {
    API.get(`users/${this.props.match.url}`).then(result => result.json()).then((user) => {
      this.setState({ user })
    })
  }
  render() {
    const { user } = this.state
    if (user) {
      return <UserPage {...this.state.user} />
    }
    return null
  }
}

export default UserPageContainer
