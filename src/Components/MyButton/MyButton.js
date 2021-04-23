import React from 'react'
import classNames from 'classnames'
import './my-button.css'

class MyButton extends React.Component {
  render() {
    let classes = classNames('my-button', this.props.theme, this.props.className)
    return (
      <button className={classes} onClick={this.props.onClick}>{this.props.title}</button>
    )
  }
}

export default MyButton