import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

export default function Specials() {
  const [ special, setSpecials ] = useState(specials);
  return (
    <div>{special.map((special, index) =>(
      <SpecialButton key={index} special={special} />
    ))}</div>
  )
}