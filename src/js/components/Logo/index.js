import React from 'react'
import ClassNames from 'classnames'
import game_logo from '../../../images/icons/game_logo.svg'
import './index.css'

export default class Logo extends React.Component {
  static propTypes = {
    in: React.PropTypes.bool,
    logo_out: React.PropTypes.string,
    text_out: React.PropTypes.string
  }

  state = {

  }

  render () {
    const logoClassNames = ClassNames('game_logo', {
      'game_logo_in': this.props.in,
      'fade-up': (this.props.logo_out === 'fade-up')
    })
    const sloganClass = ClassNames('game_slogan', {
      'game_slogan_in': this.props.in,
      'fade-out': (this.props.text_out === 'fade-out')
    })
    const companyClass = ClassNames('company_name', {
      'company_name_in': this.props.in,
      'fade-out': (this.props.text_out === 'fade-out')
    })
    return (
      <div className='relative game_logo_area'>
        <img className={logoClassNames} src={game_logo} alt='logo' />
        <h1 className={sloganClass}>Life Game</h1>
        <h1 className={companyClass}>#YesBrain</h1>
      </div>
    )
  }
}
