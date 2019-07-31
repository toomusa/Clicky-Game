import React from "react";
import Charcard from "./Charcard";

const Game = (props) => {
  return (
    <div className="container" id="game">
      <div className="row">
        <div className="col-md-8 col-sm-10 col-xs-12 offset-md-2 offset-sm-1">
          {props.chars.map((char, index) => {
            return (
              <Charcard key={index} char={char}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Game;