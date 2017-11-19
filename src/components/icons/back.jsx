/* eslint no-unused-vars: 0 */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { string } from 'prop-types'

const BackIcon = ({ width, title }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.001 512.001"
    width={width}
  >
    <title>{title}</title>
    <path d="M384.834 180.7H36.1l73.327-82.188c4.755-5.33 4.29-13.505-1.04-18.26-5.33-4.754-13.506-4.29-18.26 1.04l-82.583 92.56c-10.06 11.28-10.058 28.283 0 39.558l82.583 92.56c2.556 2.866 6.097 4.324 9.654 4.324 3.065 0 6.14-1.083 8.607-3.282 5.33-4.755 5.795-12.93 1.04-18.26l-73.325-82.188h348.733c55.858 0 101.3 45.444 101.3 101.3s-45.443 101.3-101.3 101.3h-61.58c-7.143 0-12.933 5.79-12.933 12.933 0 7.142 5.79 12.933 12.933 12.933h61.58c70.12 0 127.166-57.046 127.166-127.166S454.955 180.7 384.835 180.7z" />
  </svg>
)

BackIcon.propTypes = {
  width: string,
  title: string,
}

BackIcon.defaultProps = {
  width: '20px',
  title: 'back',
}

export default BackIcon
