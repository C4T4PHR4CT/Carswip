import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './components/home/HomePage'
import NavBar from './components/layout/NavBar'
import ItemListPage from './components/item/ItemListPage'
import ItemDetailsPage from './components/item/ItemDetailsPage'
import LoginPage from './components/login/LoginPage'
import AuthRoute from './components/login/AuthRoute'

class App extends React.Component {
  //JSX directly can not pass instance of class to static variable
  static workaround
  //Used in extensions/Component in method rerenderAll()
  instance

  constructor (props) {
    super(props)

    this.state = {}

    if (window.location.pathname.substring(0,5) !== '/item' || performance.getEntriesByType("navigation")[0].type === 'reload')
      sessionStorage.setItem('selection', '[]')

    this.instance = this
    App.workaround = this.instance
  }

  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <AuthRoute path='/items' component={ItemListPage} />
            <AuthRoute path='/item' component={ItemDetailsPage} />
            <Route path='/login' component={LoginPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App