import React from "react";
import styled from 'styled-components';

let Buttonz = styled.button`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: steelblue;
  color: white;
  font-size: 48px;
  box-shadow: 0px 2px 0px 2px maroon;
`


const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Buttonz onClick={props.special === "C" ? props.clear : null}>{props.special}</Buttonz>
    </>
  );
};

export default SpecialButton;
