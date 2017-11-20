/* eslint no-unused-vars: 0 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import style from './style'
import { UserListContainer, UserPageContainer } from '../containers'
import UserPage from '../components/userPage'

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={UserListContainer} />
      <Route exact path="/:id" component={UserPageContainer} />
    </Switch>
    <style jsx global>{style}</style>
  </div>
)

export default App
