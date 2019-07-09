import React, {useState} from "react";
import styled from 'styled-components';

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import { operators } from '../../../data';


let Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  height: 98%;
`

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsArray, changeOperators] = useState(operators);

  return (
    <Column>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorsArray.map(operator => {
         return <OperatorButton operator={operator} />
       })}
    </Column>
  );
};

export default Operators;