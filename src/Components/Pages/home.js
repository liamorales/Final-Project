import React from 'react';
import HomePage from '../HomePage';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';


function Home() {
  return (
    <>
    <HomePage {...homeObjOne} />
    <HomePage {...homeObjTwo} />
    <HomePage {...homeObjThree} />
    <HomePage {...homeObjFour} />
    </>
  )
}

export default Home