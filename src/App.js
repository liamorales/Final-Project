import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

import Footer from './Components/Pages/Footer/Footer.js';
import Classes from './Components/Pages/Classes/Classes';
import Dancewear from './Components/Pages/Dancewear/Dancewear';
import SignUp from './Components/Pages/SignUp/SignUp';
import home from '../src/Components/Pages/home';
import Pricing from './Components/Prices';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path ='/' element = {home} />
       <Route path ='/classes' component = {Classes} />
       <Route path ='/dancewear' component = {Dancewear} />
       <Route path ='/sign-up' component = {SignUp} />
    </Routes>
    <Pricing />
    <Footer />
    </>
  
    
  );
}

export default App;
