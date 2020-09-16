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
    let { squaresArray, turns, treasureBox} = this.state
    if (turns !== 1) {
      turns -= 1
      this.setState({turns: turns})
      if (indexLocation === treasureBox){
        squaresArray[treasureBox] = "💰"
        alert("YOU WIN!")
      }
      else {
        squaresArray[indexLocation] =  "🌴"
      }
      this.setState({squaresArray: squaresArray});
      // this.state.squaresArray[this.state.treasureBox] = "💰"
      // this.setState({squaresArray: this.state.squaresArray})
    } else {
      alert("Game Over!")
    }
  }

  restartGame = () => {
    let { squaresArray, turns, treasureBox} = this.state
    turns = 9
    this.setState({turns: turns})
    squaresArray = [...Array(9).fill("Tree")]
    this.setState({squaresArray: squaresArray})
    treasureBox = Math.floor(Math.random() * 9)
    this.setState({treasureBox: treasureBox})
  }

  render(){
    let { squaresArray, treasureBox } = this.state
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
      <h3>Remaining Turns: {this.state.turns}</h3>
      <br></br>
      <button onClick= {this.restartGame}> Restart Game</button>
      </>
    )
  }
}
