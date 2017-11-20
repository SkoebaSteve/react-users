/* eslint import/no-unresolved: [0] */
/* eslint import/extensions: [0] */
import css from 'styled-jsx/css'
import { colors } from '../../../config/variables'

export default css`
  .header {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: ${colors.white};
    text-align: center;
  }

  .headerNav {
    align-self: flex-start;
  }

  .headerTitle {
    align-self: center;
    margin: 0;
    color: ${colors.gray};
    font-size: 20px;
  }
`
