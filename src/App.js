import React from "react";
// import React, { Component } from 'react';
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Scoreboard from "./components/Scoreboard";
import Game from "./components/Game";
import Footer from "./components/Footer";
// import Charblocks from "./components/Images";


function App() {
  return (
    <div>
      <Header/>
      <Instructions/>
      <Scoreboard/>
      <Game />
      <Footer/>
    </div>
  );
}

export default App;

// class App extends Component {

  // state = {
  //   chars: [],
  //   names: [],
  //   clicks: 0,
  //   score: 0
  // }

  // componentDidMount(){
  //   let Chars = this.shuffle(Charblocks)
  //   console.log(this.state)
  //   this.setState({
  //     chars: [...Chars]
  //   })
  // } 

  // shuffle(array) {
  //   var currentIndex = array.length, temporaryValue, randomIndex;
  //     while (0 !== currentIndex) {
  //       randomIndex = Math.floor(Math.random() * currentIndex);
  //       currentIndex -= 1;
  //       temporaryValue = array[currentIndex];
  //       array[currentIndex] = array[randomIndex];
  //       array[randomIndex] = temporaryValue;
  //     }
  //   return array;
  // }

//   render(){
//     return (
//       <div>
//         <Header/>
//         <Instructions/>
//         <Scoreboard/>
//         <Game state={this.state} />
//         <Footer/>
//       </div>
//     );
//   }
// }

// export default App;
 
