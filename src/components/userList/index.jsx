/* eslint no-unused-vars: 0 */
/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/yannickcr/eslint-plugin-react/issues/1389
/* eslint-disable react/no-typos */
import React from 'react'
import propTypes, { arrayOf, object } from 'prop-types'
import { Link } from 'react-router-dom'
import Header from '../header'
import User from '../user'
import css from './style.css'

const UserList = ({ users }) => (
  <div>
    <Header title="directory" />
    <ul className={css.userList}>
      {
        users.map((user) => {
          const { id, name, avatar } = user
          return (
            <li className={css.userListItem} key={id}>
              <Link to={`/${id}`}>
                <User id={id} caption={name} avatar={avatar} />
              </Link>
            </li>
          )
        })
      }
    </ul>
  </div>
)

UserList.propTypes = {
  users: arrayOf(object).isRequired,
}

export default UserList
