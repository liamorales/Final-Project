import React from 'react';
import { Button } from './Button';
import './prices.css';
import {GiLifeBar } from 'react-icons/gi';
import { BsStarHalf } from 'react-icons/bs';
import { RiHeartFill } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Memberships</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiLifeBar />
                </div>
                <h3>Begginer</h3>
                <h4>$45</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Pick 3 Different Classes </li>
                  <li>1 on your own Dance Time</li>
                  <li>10% off All Dancewear</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsStarHalf />
                </div>
                <h3>Intermidiate</h3>
                <h4>$50.0</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Pick 4 Dance Classes to attend</li>
                  <li>2 on your own Dance Time</li>
                  <li>15% off All Dancewear</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <RiHeartFill />
                </div>
                <h3>Dance Lover</h3>
                <h4>$55</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Pick 5 classes to attend</li>
                  <li>4 on your own Dance Time</li>
                  <li>25% off All Dancewear</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;