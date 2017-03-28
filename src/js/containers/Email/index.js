import React from 'react'
import Form from '../Login/form.js'

export default class Email extends React.Component {
  state = {
    email: '',
    email_placeholder: '輸入信箱取得你的密碼'
  }

  handleSendEmail = (e) => {
    e.preventDefault()
    // todo
  }

  render () {
    const props = {
      email: this.state.email,
      email_placeholder: this.state.email_placeholder,
      handleSendEmail: this.handleSendEmail
    }
    return (
      <Form {...props} />
    )
  }
}
