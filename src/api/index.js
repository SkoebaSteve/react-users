import 'whatwg-fetch'
import Promise from 'promise-polyfill'
// To add to window
if (!window.Promise) {
  window.Promise = Promise
}

const GetUsers = () => {
  fetch('http://localhost:3000/users')
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
}

export default GetUsers
