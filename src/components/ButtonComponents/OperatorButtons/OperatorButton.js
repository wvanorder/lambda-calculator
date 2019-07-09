import React from "react";
import styled from 'styled-components';

let Buttonz = styled.button`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: mediumturquoise;
  color: white;
  font-size: 48px;
  box-shadow: 0px 2px 0px 2px maroon;
`

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Buttonz value={props.operator.value} onClick={props.operator.value !== '=' ? props.giveSign: props.findSum} >{props.operator.char}</Buttonz>
    </>
  );
};

export default OperatorButton;
