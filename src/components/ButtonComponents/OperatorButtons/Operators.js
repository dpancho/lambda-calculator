import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file


export default function Operators() {
  const [ currentOperator, setCurrentOperator ] = useState(operators);
  return (
    <div>{currentOperator.map((operator, index) =>(
      <OperatorButton key={index} operator={operator} />
    ))}</div>
  )
}