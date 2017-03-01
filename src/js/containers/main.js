import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { WillMountAnimation, LoadingStatus } from '../components/Loading/'

import Enter from './Enter'
import Login from './Login'
import Event from './Event'

class Main extends React.Component {

  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/event">Event</Link></li>
          </ul>
          
          <WillMountAnimation />
          <LoadingStatus />
          <hr/>
          <Route exact path="/" component={Enter}/>
          <Route path="/login" component={Login}/>
          <Route path="/event" component={Event}/>
        </div>
      </Router>
    );

  }
}

export default Main
