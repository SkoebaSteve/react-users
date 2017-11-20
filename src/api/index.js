import 'whatwg-fetch'
import Promise from 'promise-polyfill'
// To add to window
if (!window.Promise) {
  window.Promise = Promise
}

const API = {
  url: 'http://localhost:3000/',

  /**
   * fetch() will only reject a promise if the user is offline,
   * or some unlikely networking error occurs, such a DNS lookup failure.
   * However, there is a simple `ok` flag that indicates
   * whether an HTTP response's status code is in the successful range.
   */
  handleError(_res) {
    return _res.ok ? _res : Promise.reject(_res.statusText)
  },

  /**
   * Get abstraction.
   * @return {Promise}
   */
  get(_endpoint) {
    return fetch(this.url + _endpoint)
      .then(this.handleError)
      .catch((error) => { throw new Error(error) })
  },
}

export default API
