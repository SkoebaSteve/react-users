/* eslint import/no-unresolved: [0] */
/* eslint import/extensions: [0] */
import css from 'styled-jsx/css'
import { colors, shadows } from '../../../config/variables'

export default css`
  .user {
    margin: 0;
    text-align: center;
  }

  .userImage {
    width: 70%;
    border-radius: 100%;
    box-shadow: ${shadows.small};
  }

  .userCaption {
    margin-top: 7px;
    color: ${colors.gray};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.3;
  }

  .large {
    padding: 8px 16px;
    margin: 0 auto;
    max-width: 600px;
  }

  .large .userImage {
    display: block;
    margin: auto;
    width: 60%;
    max-width: 400px;
    box-shadow: ${shadows.big};
  }
`
