import React, { useState } from "react";
import styled from 'styled-components';


//import any components needed
import SpecialButton from './SpecialButton';

//Import your array data to from the provided data file

import {specials} from '../../../data';

const Specialz = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  justify-content: space-evenly;
`

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialsArray, changeSpecials] = useState(specials);


  return (
    <Specialz>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialsArray.map(special => {
         return <SpecialButton special={special} clear={props.clear} />
       })}
    </Specialz>
  );
};

export default Specials;
