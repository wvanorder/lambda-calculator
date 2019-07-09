import React from "react";
import styled from 'styled-components';


const Displayz = styled.div`
  height: 130px;
  width: 90%;
  margin: 0 auto;
  border-radius: 120px;
  background-color: darkgray;
  margin-bottom: 15px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`

const Display = (props) => {
  console.log("Diaply Props: ", props)
  return(
    <Displayz>{/* Display any props data here */}
      <h2>{props.firstNum && !props.secondNum ? props.firstNum : (props.firstNum && props.secondNum ? props.secondNum : (props.firstNum && props.secondNum && props.sum ? props.sum : 0))}</h2>
    </Displayz>
  ) 
};

export default Display;
