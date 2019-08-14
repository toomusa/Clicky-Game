import React from "react";

function Scoreboard(props) {

  let message = ""

  if (props.state.clicks === 1) {
    message = "Now click on the character's other image"
  }
  else if (props.state.clicks === 0 && props.state.score === 0 && props.state.start === false) {
    message = "Click on a character to start the game."
  } 
  else if (props.state.clicks === 0 && props.state.score === 0) {
    message = "Start Over."
  } 
  else if (props.state.clicks === 0 && props.state.score === 2)  {
    message = "That's a match! Keep going!"
  }
  else if (props.state.clicks === 0 && props.state.score === 4)  {
    message = "Another match! 4 more to go!"
  }
  else if (props.state.clicks === 0 && props.state.score === 6)  {
    message = "Good work! Halfway there!"
  }
  else if (props.state.clicks === 0 && props.state.score === 8)  {
    message = "Same same! Can you go all the way?"
  }
  else if (props.state.clicks === 0 && props.state.score === 10)  {
    message = "Hot damn! 1 more for the win!"
  }
  else if (props.state.clicks === 0 && props.state.score === 12)  {
    message = "YOU WON! If this wasn't your first attempt, you should work on your memory game!"
  }

  return (
    <div id="scoreboard">
      <div className="row">
        <div className="col-md-3 col-sm-4 col-xs-12" id="scoretitlebox">
          <h3>&nbsp;&nbsp;&nbsp;Scoreboard</h3>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12" id="clickbox">
          <label id="click">Clicks: {props.state.clicks}</label>
          <label>&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <label id="score">Score: {props.state.score}</label>
        </div>
        <div className="col-md-6 col-sm-5 col-xs-12" id="messagebox">
          <p id="message">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;