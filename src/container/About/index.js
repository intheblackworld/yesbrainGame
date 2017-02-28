import React from 'react'
import { browserHistory } from 'react-router'
export default class About extends React.Component {

  test = (event) => {
    event.preventDefault()
    browserHistory.push('/test')
  }

  render () {
    return (
      <button onClick={this.test}>About</button>

    )
  }
}
