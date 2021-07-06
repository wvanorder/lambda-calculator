import React, { useState } from "react";
import styled from 'styled-components';

//import any components needed
import NumberButton from './NumberButton';

//Import your array data to from the provided data file
import { numbers } from '../../../data';

const Numberz = styled.div`
height: 500px;
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  justify-content: space-evenly;
  align-content: space-evenly;
`


const Numbers = (props) => {
  console.log(props)
  // STEP 2 - add the imported data to state
  const [numbersArray, changeNumbers] = useState(numbers);

  return (
    <Numberz>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbersArray.map(number => {
         return <NumberButton number={number} sign={props.sign} firstNumHandler={props.firstNumHandler} secondNumHandler={props.secondNumHandler}/>
       })}
    </Numberz>
  );
};


export default Numbers;