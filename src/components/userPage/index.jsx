/* eslint no-unused-vars: 0 */
/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/yannickcr/eslint-plugin-react/issues/1389
/* eslint-disable react/no-typos */
import React from 'react'
import { string } from 'prop-types'
import Header from '../header'
import User from '../user'

const UserPage = ({
  id,
  name,
  description,
  avatar,
}) => (
  <div>
    <Header title={name} icon />
    <User id={id} caption={description} avatar={avatar} large />
  </div>
)

UserPage.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  avatar: string.isRequired,
  description: string.isRequired,
}


export default UserPage

