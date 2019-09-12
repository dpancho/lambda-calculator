import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export default function Number() {
  const [currentNumber, setCurrentNumber] = useState(numbers);
  return (
    
    <div>{currentNumber.map((number, index) =>(
      <NumberButton key={index} number={number} />
    ))}</div>
  )
}