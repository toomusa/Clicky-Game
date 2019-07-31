import React from "react";

function Scoreboard(props) {
  return (
    <div className="jumbotron" id="scoreboard">
      <h3>Scoreboard</h3>
      <div id="scorebox">
        <p id="score">{props.score}</p>
      </div>
    </div>
  );
}

export default Scoreboard;