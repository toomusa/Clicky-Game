import React from "react";

function Instructions() {
  return (
    <div id="instructions">
      <div className="row">
        <div className="col-md-3 col-sm-4 col-xs-12" id="titlebox">
          <h3>Instructions</h3>
        </div>
        <div className="col-md-9 col-sm-8 col-xs-12" id="directions">
          <p>Click on an image below and then click on the other image of the same character.
          After each click, the images will shuffle.
          Your score will reset if you click on the same image or a non-matching image. 
          Can you get a high-score of 12?</p>
        </div>
      </div>
    </div>
  );
}

export default Instructions;