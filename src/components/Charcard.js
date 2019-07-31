import React from "react";
// import ironman1 from "../images/ironman1.jpg";

const  Charcard = (props) => {
  return (
    <div className="charcard">
      <img alt="character" src={props.imageSrc}/>
    </div>
  );
}

export default Charcard;