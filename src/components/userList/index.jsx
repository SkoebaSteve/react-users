/* eslint no-unused-vars: 0 */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import propTypes, { arrayOf, string } from 'prop-types'
import style from './style'
import User from './user'

const UserList = ({ users }) => (
  <ul className="userList">
    {
      users.map((user) => {
        const { id, name, avatar } = user
        return (
          <li key={id}><User id={id} name={name} avatar={avatar} /></li>
        )
      })
    }
    <style jsx>{style}</style>
  </ul>
)

UserList.propTypes = {
  users: arrayOf(string).isRequired
}

export default UserList
