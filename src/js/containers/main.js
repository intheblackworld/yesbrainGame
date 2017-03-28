import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
// import { WillMountAnimation, LoadingStatus } from '../components/Loading/'
import ClassNames from 'classnames'

import Enter from './Enter'
import Login from './Login'
import Event from './Event'
import Statistic from './Statistic'
import Email from './Email'
import Guide from './Guide'
import Charactor from './Charactor'

class Main extends React.Component {

  state = {
    location: location.hash.slice(2)
  }

  handleLocation () {
    this.setState({location: location.hash.slice(2)})
  }

  render () {
    const className = ClassNames('relative background')
    return (
      <Router>
        <div className={className}>
          {/*<ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/event">Event</Link></li>
            <li><Link to="/statistic">Statistic</Link></li>
          </ul>

           <WillMountAnimation />
          <LoadingStatus />
          <hr/>*/}
          <Route exact path="/" component={Enter}/>
          <Route path="/guide" component={Guide}/>
          <Route path="/login" component={Login}/>
          <Route path="/event" component={Event}/>
          <Route path="/statistic" component={Statistic}/>
          <Route path="/forget_password" component={Email}/>
          <Route path="/charactor" component={Charactor}/>
        </div>
      </Router>
    );

  }
}

export default Main
