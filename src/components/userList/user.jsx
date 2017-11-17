/* eslint no-unused-vars: 0 */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import propTypes, { string } from 'prop-types'

const User = ({ id, name, avatar }) => (
  <div>
    <span>{name}</span>
    <img src={avatar} alt="" />
  </div>
)

User.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  avatar: string.isRequired,
}

export default User
