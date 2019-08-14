import React from "react";

function Charcard(props) {

  return (
    <span className="charcard">
      <img 
        alt={props.char.name} 
        src={props.char.imageSrc} 
        status={props.char.clicked} 
        onClick={() => props.click(props.char)}
        className="char-image"
      />
    </span>
  )
}

export default Charcard;
