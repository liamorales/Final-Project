import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Pages/Footer/Footer.js';
import Classes from './Components/Pages/Classes/Classes';
import Dancewear from './Components/Pages/Dancewear/Dancewear';
import SignUp from './Components/Pages/SignUp/SignUp';
import Home from '../src/Components/Pages/home';
import Pricing from './Components/Prices';
import List from './Components/Current Dancers/List';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
       <Route path ="/home" element = {<Home/>} />
       <Route path ="/classes" element = {<Classes/>} />
       <Route path ="/dancewear" element = {<Dancewear/>} />
       <Route path ="/sign-up" element ={<SignUp/>} />
    </Routes>
    <List />
    <Pricing />
    <Footer />
    </>
  
    
  );
}

export default App;
