import React, { Component } from 'react'

export default class Square extends Component {

  handleClick = () => {
    this.props.handleLocation(this.props.index)
  }

  render() {
    return(
      <>
        <div id="square" onClick={ this.handleClick}>
          { this.props.questionMark }
        </div>
      </>
    )
  }
}
