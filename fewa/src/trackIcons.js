import React from "react"
import { createRequireFromPath } from "module";


function UXImg() {
  return (
    
    <img src={require('./img/uxImage.jpg')} className="mainContent"></img>
  )
};

function SWEImg() {
  return (
        
    <img src={require('./img/sweImage.png')} className="mainContent"></img>
   
  )
};

function PMImg() {
  return (
    
    <img src={require('./img/pmImage.jpg')} className="mainContent"></img>
    
  )
};

function DSImg() {
  return (
    
    <img src={require('./img/dsImage.jpg')} className="mainContent"></img>
    
  )
};

export {UXImg, SWEImg, PMImg, DSImg}

