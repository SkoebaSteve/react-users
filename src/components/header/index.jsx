/* eslint no-unused-vars: 0 */
/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/yannickcr/eslint-plugin-react/issues/1389
/* eslint-disable react/no-typos */
import React from 'react'
import { string, bool } from 'prop-types'
import { BackIcon } from '../icons'
import style from './style'

const Header = ({ title, icon }) => (
  <header className="header">
    { icon &&
      <nav className="headerNav">
        <BackIcon />
      </nav>
    }
    <h1 className="headerTitle">{title}</h1>
    <style jsx>{style}</style>
  </header>
)

Header.propTypes = {
  title: string.isRequired,
  icon: bool,
}

Header.defaultProps = {
  icon: false,
}

export default Header
