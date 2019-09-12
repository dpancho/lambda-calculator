import React, {useState} from "react";

const Display = (props) => {
  const [count, setCount] = useState(0);
  return (
  <div className="display">
    <span>{count}</span>
  </div>
  )
};

export default Display