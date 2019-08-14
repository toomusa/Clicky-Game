import React, { Component } from 'react';
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Scoreboard from "./components/Scoreboard";
import Game from "./components/Game";
import Footer from "./components/Footer";
import Chars from "./components/Images";

class App extends Component {
  
  state = {
    chars: [],
    names: [],
    clicks: 0,
    score: 0,
    start: false,
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
    this.setState({ 
      clicks: 0,
      score: 0,
      names: [],
      chars: this.shuffle(this.state.chars),
      start: false,
    })
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
          setTimeout(() => this.winGame(), 5000)
        }
      })
    } else {
      this.state.chars.forEach(char => char.clicked = "false")
      this.setState({ 
        clicks: 0,
        score: 0,
        names: [],
        chars: this.shuffle(this.state.chars)
      })
    }
  }

  charShuffle() {
    this.setState({ 
      chars: this.shuffle(this.state.chars)
    })
  }

  clickAction = (char) => {
    if (char.clicked === "false") {
      char.clicked = "true";
      this.setState({ 
        clicks: this.state.clicks + 1,
        names: this.state.names.concat(char.name),
        start: true
      }, () => {
        this.state.clicks === 2 ? this.gameAction() : this.charShuffle()
      })
    } else {
      this.state.chars.forEach(char => char.clicked = "false")
      this.setState({ 
        clicks: 0,
        score: 0,
        names: [],
        chars: this.shuffle(this.state.chars)
      })    
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Instructions/>
        <Scoreboard state={this.state} />
        <Game click={this.clickAction} state={this.state} />
        <Footer/>
      </div>
    );
  }
}

export default App;
 
