import React, { Component } from 'react';
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Scoreboard from "./components/Scoreboard";
import Game from "./components/Game";
import Footer from "./components/Footer";
// import Charcard from "./components/Charcard";
import Chars from "./components/Images";

class App extends Component {

  state = {
    chars: [],
    clicks: 0
  }

  // renderChars = chars => {

  // }
 componentDidMount(){
  let reader = new FileReader();
  let charcards = Chars.map(char => {
    return reader.readAsDataURL(char);
  })
  this.setState({
    chars: [...charcards]
  })
 } 


  render(){
    return (
      <div>
        <Header/>
        <Instructions/>
        <Scoreboard/>
        <Game chars={this.state.chars}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
 
