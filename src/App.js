import React, { useState } from "react";
import "./App.css";
import styled from 'styled-components'
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';

let Containerz = styled.div`
  width: 600px;
  background-color: tomato;
  height: 900px;
`

let Top = styled.div`
  display: flex;
  flex-flow: row nowrap
`

let Appz = styled.div`
  height: 700px;
  width: 95%;
  display: flex;
  flex-flow: row wrap;
`

let Triple = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
`

const Right = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: space-around;
  width: 15%;
`


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [sum, changeSum] = useState(0); 
  const [firstNum, changeFirstNum] = useState(0);
  const [secondNum, changeSecondNum] = useState(0);
  const [sign, changeSign] = useState('');

  const makeFirstNum = e => {
    return changeFirstNum(firstNum + e.target.value);
  }

  const clear = () => {
    changeFirstNum(0);
    changeSum(0);
    changeSecondNum(0);
  }


  return (
    <Containerz>

        <Logo />
        <Display firstNum={firstNum} />

      <Appz>
        <Triple>
          <Specials clear={clear} />
          <Numbers firstNumHandler={makeFirstNum} sign={sign}/>
        </Triple>
        <Right>
          <Operators />
        </Right>
        
        
          {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </Appz>
    </Containerz>
  );
}

export default App;
