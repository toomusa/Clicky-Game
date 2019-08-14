import React, { Component } from 'react'
import Charcard from "./Charcard";
import Chars from "./Images";

class Game extends Component {

  state = {
    chars: [],
    names: [],
    clicks: 0,
    score: 0
  }

  componentDidMount(){
    this.setState({
      chars: this.shuffle(Chars)
    })
  } 

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    return array;
  }

  winGame() {
    console.log("YOU WON!")
  }

  gameAction() {
    if (this.state.names[0] === this.state.names[1]) {
      this.setState({ 
        clicks: 0,
        score: this.state.score + 2,
        names: [],
        chars: this.shuffle(this.state.chars)
      }, () => {
        if (this.state.score === 12) {
          this.winGame()
        }
      })
    } else {
      this.setState({ 
        clicks: 0,
        score: 0,
        names: [],
        chars: this.shuffle(this.state.chars)
      }, () => {
        console.log("After name mismatch")
        console.log(this.state)
      })
    }
  }

  charShuffle() {
    this.setState({ 
      chars: this.shuffle(this.state.chars)
    })
  }

  clickAction = (name) => {
    this.setState({ 
      clicks: this.state.clicks + 1,
      names: this.state.names.concat(name)
    }, () => {
      this.state.clicks === 2 ? this.gameAction() : this.charShuffle()
    })
  }

  render() {
    return (
      <div className="container" id="game">
        <div className="row">
          <div className="col-md-8 col-sm-10 col-xs-12 offset-md-2 offset-sm-1">
            {this.state.chars.map((char, index) => {
              return (
                <Charcard key={index} char={char} data-id={char.name} click={this.clickAction} />
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;