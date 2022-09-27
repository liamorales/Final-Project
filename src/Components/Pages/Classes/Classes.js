import React from 'react'
import HomePage from '../../HomePage';
import {homeObjThree, homeObjTwo} from '../Data'

function Classes() {
  return (
    <>
      <HomePage {...homeObjThree}/>
      <HomePage {...homeObjTwo}/>
    </>
  );
}

export default Classes