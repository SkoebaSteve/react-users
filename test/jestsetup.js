/* eslint no-undef: 0 */
/* eslint no-console: 0 */
// Make Enzyme functions available in all test files without importing
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}