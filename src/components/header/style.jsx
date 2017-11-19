/* eslint import/no-unresolved: [0] */
/* eslint import/extensions: [0] */
import css from 'styled-jsx/css'
import { colors } from '../../../config/variables'

export default css`
  .header {
    padding: 16px;
    background-color: ${colors.white};
    text-align: center;
  }

  .headerTitle {
    font-size: 20px;
    margin: 0;
    color: ${colors.gray};
  }
`
