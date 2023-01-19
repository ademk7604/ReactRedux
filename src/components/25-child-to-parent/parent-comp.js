import React, { useState } from "react";
import ChildComp from "./child-comp";

const ParentComp = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (val) => {
    console.log(val);
    /* child dan parent data gondermenin en basit yolu bu.
paren den val gondermek amacimdayim  */
    setCounter((prev) => prev + val);
  };

  return (
    <div>
      <div>Counter: {counter}</div>
      <ChildComp handleCounter1={handleCounter} />
    </div>
  );
};

export default ParentComp;
