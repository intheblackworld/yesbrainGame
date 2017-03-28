import React from 'react'
import ReactSwipe from 'react-swipe'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import guide1 from '../../../images/icons/guide1.svg'
import guide2 from '../../../images/icons/guide2.svg'
import guide3 from '../../../images/icons/guide3.svg'
import indigatorDefault from '../../../images/icons/indigator_default.svg'
import indigatorActive from '../../../images/icons/indigator_active.svg'
import './index.css'
import { swipeDetect } from '../../lib/swipedetect'

export default class Guide extends React.Component {
  // todo check state to redirect to event page
  state = {
    indigatorIndex: 0
  }

  hadleIndigatorIndex = () => {

    const index = this.refs.reactSwipe.getPos()
    console.log(index)
    this.setState({indigatorIndex: index})
  }

  componentDidMount () {
    window.addEventListener('touchend', this.hadleIndigatorIndex)
    // todo
    // swipeDetect(this.refs.reactSwipe.refs.container, this.hadleIndigatorIndex)
  }

  componentWillUnmount () {
    window.removeEventListener('touchend', this.hadleIndigatorIndex)
  }

  render() {
    const { indigatorIndex } = this.state
    const swipeOptions = {
      continuous: false,
      callback() {
        console.log('change')
      },
      transitionEnd() {
        console.log('ended transition');
      }
    }
    return (
        <div className='white'>
          <ReactSwipe ref="reactSwipe" className='carousel' swipeOptions={swipeOptions}>
            <img src={guide1} alt='guide1' />
            <img src={guide2} alt='guide2' />
            <img src={guide3} alt='guide3' />
          </ReactSwipe>
          <div className='indigator'>
          { _.range(3).map((index) => {
            if (index === indigatorIndex) {
              return (<img key={index} src={indigatorActive} alt='indigator' />)
            }
            return <img key={index} src={indigatorDefault} alt='indigator' />
          })}
          </div>
          { indigatorIndex === 2 && <div className=''><Link to="/charactor">進入遊戲</Link></div>}
        </div>
    )
  }
}
