import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

const Counter1 = () => {
  const [counter, setCounter] = useState(0);


  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={() => setCounter((prev)=> prev+1)}>
        <AiOutlinePlusCircle />
      </Button>
      <Button variant="light" disabled>
        {counter}
      </Button>
      <Button variant="warning" onClick={() => setCounter((prev)=> prev-1)}>
        <AiOutlineMinusCircle />
      </Button>
      <Button variant="danger" onClick={() => setCounter(0)} disabled={!counter}>
        <GrPowerReset />
      </Button>
    </ButtonGroup>
  );
};

export default Counter1;
