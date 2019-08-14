import React from "react";

function Charcard(props) {
  return (
    <span className="charcard">
      <img alt={props.char.name} src={props.char.imageSrc} onClick={() => props.click(props.char.name)}/>
      {/* <img alt="character" src={this.props.char.imageSrc} id="charcard" data-id={this.props.char.name} onClick={() => this.clickAction(this)}/> */}
    </span>
  )
}

export default Charcard;



// import React, { Component } from 'react'

// class Charcard extends Component {
  
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

  // stateAction(cb) {
  //   this.setState({ 
  //     clicks: this.props.state.clicks += 1,
  //     names: this.props.state.names.push(this.props.char.name)
  //   })
  //   console.log("After click action")
  //   console.log(this.props.state)
  //   cb();
  // }

  // gameAction() {
  //   if (this.props.state.names[0] === this.props.state.names[1]) {
  //     this.setState({ 
  //       clicks: this.props.state.clicks -= 2,
  //       score: this.props.state.score += 2,
  //       names: this.props.state.names.splice(0,2),
  //       chars: this.shuffle(this.props.state.chars)
  //     })
  //     console.log("Update scoreboard by 2 points")
  //     console.log("After score update")
  //     console.log(this.props.state)
  //     if (this.props.state.score === 12) {
  //       console.log("YOU WON!")
  //     }
  //   } else {
  //     this.setState({ 
  //       clicks: this.props.state.clicks -= 2,
  //       score: this.props.state.score -= this.props.state.score,
  //       names: this.props.state.names.splice(0,2),
  //       chars: this.shuffle(this.props.state.chars)
  //     })
  //     console.log("After name mismatch")
  //     console.log(this.props.state)
  //   }
  // }

  // charShuffle() {
  //   let shuffle = this.shuffle(this.props.state.chars)
  //   this.setState({ 
  //     chars: [...shuffle]
  //   })
  //   console.log("After array shuffle")
  //   console.log(this.props.state)
  // }

  // clickAction() {
  //   console.log(this.props.char.name)
  //   this.stateAction(cb => {
  //     if (this.props.state.clicks === 2) {
  //       this.gameAction()
  //     } else {
  //       this.charShuffle()
  //     }
  //   })
  // }

//   render() {
//     return (
//       <span className="charcard">
//         <img alt="character" src={this.props.char.imageSrc} onClick={() => this.props.click()}/>
//         {/* <img alt="character" src={this.props.char.imageSrc} id="charcard" data-id={this.props.char.name} onClick={() => this.clickAction(this)}/> */}
//       </span>
//     )
//   }
// }

// export default Charcard;