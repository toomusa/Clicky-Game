import React from "react";
import Charcard from "./Charcard";

function Game(props) {
    return (
      <div className="container-fluid" id="game">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            {props.state.chars.map((char, index) => {
              return (
                <Charcard key={index} char={char} data-id={char.name} click={props.click} />
              )
            })}
          </div>
        </div>
      </div>
    );
}

export default Game;
