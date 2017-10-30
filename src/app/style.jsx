/* eslint import/no-unresolved: [0] */
/* eslint import/extensions: [0] */
import css from 'styled-jsx/css'
import { colors } from '../../config/variables'

export default css`
  @import "config/media.css";
  .app {
    color: ${colors.black}
  }
`
