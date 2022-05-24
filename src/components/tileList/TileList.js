import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const objectList = props[Object.keys(props)[0]];
  console.log("objectList is", objectList)
  return (
    <div>
      {objectList.map((object,index) => {
        return <Tile object={object} key={index}/>
      })} 
    </div>
  );
};
