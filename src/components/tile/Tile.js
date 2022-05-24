import React from "react";

export const Tile = ({object}) => {
  function makeParagraphs(){
    let firstTimeThrough = true;
    const listOfElements = [];
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        listOfElements.push(<p className={firstTimeThrough ? 'tile-title' : 'tile'}>{element}</p>)
        console.log("Making element list, here it is:",  listOfElements)
        
      }
    }
    console.log("Tile, helperfunction returning list of elements, list: ",listOfElements)
    return listOfElements;
  }
  
  return (
    <div className="tile-container">
      {makeParagraphs()}
    </div>
  );
};
