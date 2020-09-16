import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squaresArray: [...Array(9).fill("Tree")],
      treasureBox: Math.floor(Math.random() * 9),
      turns: 9
    }
  }

  handleLocation = (indexLocation) => {
    let { squaresArray, turns} = this.state
    if (turns !== 1) {
      turns -= 1;
      squaresArray[indexLocation] = '🌴';
      alert(indexLocation);
    } else {
      alert("Game Over!")
    }
  }

  render(){
    let { squaresArray } = this.state
    let squares = squaresArray.map((squares, index) => {
      return(
        <Square
          questionMark={ squares }
          index={ index }
          key={ index }
          handleLocation={ this.handleLocation }
        />
      )
    })
    return(
      <>
      <h1>Treasure Hunt</h1>
      <div id="gameboard">
        { squares }
      </div>
      </>
    )
  }
}
