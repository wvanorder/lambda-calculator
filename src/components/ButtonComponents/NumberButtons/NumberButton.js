import React from "react";
import styled from 'styled-components';

let Buttonz = styled.button`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: midnightblue;
  color: white;
  font-size: 48px;
  box-shadow: 0px 2px 0px 2px maroon;
  :nth-child(10){
    border-radius: 120px;
    width: 66%;
  }
`

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Buttonz value={props.number} onClick={!props.sign? props.firstNumHandler : props.secondNumHandler} >{props.number}</Buttonz>
    </>
  );
};

export default NumberButton;
