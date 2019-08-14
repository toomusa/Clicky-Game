
const Chars = [
  {
    imageSrc: require("../images/ironman1.jpg"),
    name: "ironman",
    clicked: false
  },
  {
    imageSrc: require("../images/ironman2.jpg"),
    name: "ironman",
    clicked: false
  },
  {
    imageSrc: require("../images/captain1.jpg"),
    name: "captain",
    clicked: false
  },
  {
    imageSrc: require("../images/captain2.jpeg"),
    name: "captain",
    clicked: false
  },
  {
    imageSrc: require("../images/hulk1.jpg"),
    name: "hulk",
    clicked: false
  },
  {
    imageSrc: require("../images/hulk2.jpg"),
    name: "hulk",
    clicked: false
  },
  {
    imageSrc: require("../images/marvel1.jpeg"),
    name: "marvel",
    clicked: false
  },
  {
    imageSrc: require("../images/marvel2.jpg"),
    name: "marvel",
    clicked: false
  },
  {
    imageSrc: require("../images/panther1.jpg"),
    name: "panther",
    clicked: false
  },
  {
    imageSrc: require("../images/panther2.jpg"),
    name: "panther",
    clicked: false
  },
  {
    imageSrc: require("../images/widow1.jpg"),
    name: "widow",
    clicked: false
  },
  {
    imageSrc: require("../images/widow2.jpeg"),
    name: "widow",
    clicked: false
  }
]

export default Chars;


// import ironman1 from "../images/ironman1.jpg";
// import ironman2 from "../images/ironman2.jpg";
// import captain1 from "../images/captain1.jpg";
// import captain2 from "../images/captain2.jpg";
// import hulk1 from "../images/hulk1.jpg";
// import hulk2 from "../images/hulk2.jpg";
// import marvel1 from "../images/marvel1.jpg";
// import marvel2 from "../images/marvel2.jpg";
// import panther1 from "../images/panther1.jpg";
// import panther2 from "../images/panther2.jpg";
// import widow1 from "../images/widow1.jpg";
// import widow2 from "../images/widow2.jpg";

// let images = [ironman1, ironman2, captain1, captain2, hulk1, hulk2, marvel1, marvel2, panther1, panther2, widow1, widow2]

// const charMaker = (images) => {
//   let charBlocks = images.map(image => {
//     let char = {
//       imageSrc: image,
//       clicked: false,
//       name: image.slice(14, -14)
//     }
//     return char;
//   })
//   return charBlocks;
// } 

// let Chars = charMaker(images);