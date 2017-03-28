import React from 'react'
import { Link } from 'react-router-dom'

import Form from './form.js'
import Logo from '../../components/Logo'
import './index.css'

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    repeat_password: '',
    email_placeholder: '輸入信箱',
    password_placeholder: '輸入密碼',
    repeat_password_placeholder: '重複密碼',
  }

  initInput = (event) => {
    if (event.type === 'blur') {
      if (event.currentTarget.type === 'text') {
        this.setState({email_placeholder: '輸入信箱'})
      } else {
        if (event.currentTarget.dataset.repeat) {
          this.setState({repeat_password_placeholder: '輸入密碼'})
        } else {
          this.setState({password_placeholder: '重複密碼'})
        }
      }
    }
    if (event.currentTarget.type === 'text') {
      this.setState({email_placeholder: ''})
    } else {
      if (event.currentTarget.dataset.repeat) {
        this.setState({repeat_password_placeholder: ''})
      } else {
        this.setState({password_placeholder: ''})
      }
    }
  }

  handleInput = (event) => {
    if (event.target.type === 'text') {
        this.setState({email: event.target.value})
    } else {
      if (event.target.dataset.repeat) {
        this.setState({repeat_password: event.target.value})
      } else {
        this.setState({password: event.target.value})
      }
    }
  }

  checkInputFormat () {
    console.log(1)
  }
  handleSignIn = (event) => {
    // check input format
    // todo
    this.checkInputFormat()
    event.preventDefault()
    // fetch('https://jwttest0225.herokuapp.com/api/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     name: this.state.email,
    //     password: this.state.password
    //   })
    // })
  }

  render () {
    const props = {
      handleInput: this.handleInput,
      initInput: this.initInput,
      handleSignIn: this.handleSignIn,
      email: this.state.email,
      password: this.state.password,
      repeat_password: this.state.repeat_password,
      email_placeholder: this.state.email_placeholder,
      password_placeholder: this.state.password_placeholder,
      repeat_password_placeholder: this.state.repeat_password_placeholder
    }
    return (
      <div>
        <Logo in={false}
              logo_out='fade-up'
              text_out='fade-out'/>

        <Form {...props} />

        <div className='text-center plus_hint'>
        <div><Link to="/forget_password">忘記密碼？</Link></div>
        {/* 忘記密碼的機制 */}
        <hr />
        <div className='highlight'>有邀請碼？</div>
        </div>
      </div>
    )
  }
}
