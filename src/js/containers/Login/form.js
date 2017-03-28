import React from 'react'
import './index.css'

export default class Form extends React.Component {
  static propTypes = {
    handleInput: React.PropTypes.func,
    initInput: React.PropTypes.func,
    handleSignIn: React.PropTypes.func,
    email: React.PropTypes.string,
    password: React.PropTypes.string,
    repeat_password: React.PropTypes.string,
    password_placeholder: React.PropTypes.string,
    repeat_password_placeholder: React.PropTypes.string,
    forget_password: React.PropTypes.bool,
    location: React.PropTypes.string
  }

  render () {
    const {
      handleInput,
      initInput,
      email,
      email_placeholder,
      password,
      repeat_password,
      password_placeholder,
      repeat_password_placeholder,
      handleSignIn,
      handleSendEmail
    } = this.props
    return (

      <div className='form-group fade-slide-in'>
        {(location.hash.slice(2) === 'login') &&
          <div>
            <label className='block'>Email</label>
            <input type='text'
                   onChange={handleInput}
                   onFocus={initInput}
                   onBlur={initInput}
                   placeholder={email_placeholder}
                   value={email} />
          <div>
            <label className='block'>Password</label>
            <input type='password'
                   onChange={handleInput}
                   onFocus={initInput}
                   placeholder={password_placeholder}
                   value={password} />
          </div>
          <div>
            <label className='block'>Repeat Password</label>
            <input type='password'
                   onChange={handleInput}
                   onFocus={initInput}
                   placeholder={repeat_password_placeholder}
                   value={repeat_password}
                   data-repeat />
          </div>

          <button type='submit' className='login_button' onClick={handleSignIn}>登入</button>
          <button type='submit' className='signup_button' onClick={handleSignIn}>註冊</button>
        </div>}
        {(location.hash.slice(2) === 'forget_password') &&
          <div>
            <label className='block'>Email</label>
            <input type='text'
                   onChange={handleInput}
                   onFocus={initInput}
                   onBlur={initInput}
                   placeholder={email_placeholder}
                   value={email} />
            <button type='submit' className='login_button' onClick={handleSendEmail}>發送信件</button>
          </div>
          }

      </div>
    )
  }
}
