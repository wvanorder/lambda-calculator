import React from "react";
import styled from 'styled-components';


const Displayz = styled.div`
  height: 130px;
  width: 90%;
  margin: 0 auto;
  border-radius: 120px;
  background-color: darkslategray;
  color: white;
  font-size: 75px;
  margin-bottom: 15px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`

const Display = (props) => {
  return(
    <Displayz>{/* Display any props data here */}
      <h2>{props.sum ? props.sum : (props.sign ? props.secondNum : (!props.secondNum ? props.firstNum : props.secondNum))}</h2>
    </Displayz>
  ) 
};

export default Display;
