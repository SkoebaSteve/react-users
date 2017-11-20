/* eslint no-unused-vars: 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import WebFont from 'webfontloader'
import App from './app'
import normalize from './normalize.css'

WebFont.load({
  google: {
    families: ['Open Sans', 'sans-serif'],
  },
})

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('app'),
)
