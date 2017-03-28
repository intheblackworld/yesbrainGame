import React from 'react'
import introJs from 'intro.js'

export default class Event extends React.Component {
  state = {
    stepId: 0
  }

  onHintClick () {
    this.setState({ stepId: this.state.stepId + 1 })
    introJs.introJs().setOption('hintButtonLabel', 'OK').showHint(this.state.stepId)
  }

  componentDidMount () {
    // 跟 User 拿資料，如果不是第一次登入，就不執行這一段程式碼
    introJs.introJs().setOption('hintButtonLabel', 'OK')
      .addHints()
      .hideHints()
      .showHint(this.state.stepId)
    document.querySelectorAll('.introjs-hint').forEach((hint) => {
      hint.addEventListener('click', this.onHintClick.bind(this))
    })
  }

  componentWillUnmount () {
    introJs.introJs().hideHints()
  }

  render () {
    return (
      <div>
        <a data-hint='Hello step one!'>Event1</a>
        <a data-hint='Hello step two!'>Event2</a>
        <a data-hint='Hello step three!'>Event3</a>
      </div>
    )
  }
}
