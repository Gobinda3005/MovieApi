import React, { useState, useEffect } from 'react';
import logos from '../assets/logos/bfw.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Header = () => {

  return (
    <div className='container-fluid d-flex justify-content-between bg-black text-white'>
      <div className='d-flex align-items-center'>
        <img src={logos} alt="logo" className='img-fluid' style={{ maxWidth: "50px", height: "auto" }} />
        
      </div>
      <div>
        <ul className='d-flex justify-content-between list-unstyled gap-3'>
          <li><Link to='/'></Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
