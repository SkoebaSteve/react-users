/* eslint no-unused-vars: 0 */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/yannickcr/eslint-plugin-react/issues/1389
/* eslint-disable react/no-typos */
import React from 'react'
import { string, bool } from 'prop-types'
import style from './style'

const AddDefaultSrc = (ev, src = 'assets/profile.svg') => {
  ev.target.src = src
}

const User = ({
  id,
  caption,
  avatar,
  large,
}) => (
  <figure className={large ? 'user large' : 'user'}>
    <img className="userImage" onError={AddDefaultSrc} src={avatar} alt="" />
    <figcaption className="userCaption">{caption}</figcaption>
    <style jsx>{style}</style>
  </figure>
)

User.propTypes = {
  id: string.isRequired,
  caption: string.isRequired,
  avatar: string.isRequired,
  large: bool,
}

User.defaultProps = {
  large: false,
}

export default User
