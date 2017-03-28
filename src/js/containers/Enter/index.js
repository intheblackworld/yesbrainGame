import React from 'react'
import loading_ball from '../../../images/icons/loading_ball.svg'
import { Redirect } from 'react-router-dom'

import Logo from '../../components/Logo'
import './index.css'
export default class Enter extends React.Component {
  state = {
    path: ''
  }

  static PropTypes = {

  }

  componentDidMount () {
    // todo check login state
    window.setTimeout(() => {
      this.setState({path: '/guide'})
    }, 4000)
  }

  render () {
    return (
      <div className='text-center'>
        <Logo in={true}/>
        <div className='loading'>
          <img className='loading_ball' src={loading_ball} alt='logo' />
        </div>
        <p className='loading_text'>遊戲準備中</p>
         { this.state.path && <Redirect to={this.state.path} />}
      </div>

    )
  }
}
