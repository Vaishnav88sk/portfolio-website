//import React, { useState, useEffect, useMemo } from 'react';
import React, { useMemo } from 'react';
import './Header.css';
import myPhoto from '../assets/vk.jpg'; // Add your photo to the assets folder
import useTypewriter from './useTypeWriter';

function Header() {
  //const [dynamicText, setDynamicText] = useState('');
  const texts = useMemo(()=>["AWS Solution Architect","Flutter Developer","Web Developer", "Problem Solver"],[]) ;

  // useEffect(() => {
  //   let index = 0;
  //   const intervalId = setInterval(() => {
  //     setDynamicText(texts[index]);
  //     index = (index + 1) % texts.length;
  //   }, 1600); // Change text every 2 seconds

  //   return () => clearInterval(intervalId);
    
  // }, [texts]);

  const dynamicText = useTypewriter(texts, 100, 1000,50);

  return (
    <header className="header">
      <div className="hero-container">
        <img src={myPhoto} alt="Vaishnav Kale" className="hero-photo" />
        <div className="hero-text">
          <h1>Vaishnav Kale</h1>
          <h2>{dynamicText}</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
