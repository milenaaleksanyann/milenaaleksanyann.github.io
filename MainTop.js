import React, { useEffect, useState } from 'react'
import './mainTop.scss';

export default function MainTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, []);
  return (
    <div className='MainTop'>
<div id="animated-text" className={isVisible ? 'visible' : ''}>
<h2 className='container'>Hi,i'm Milena & i'm a frontEnd Web Developer</h2>
<h3>Welcome to my website! Here you will find almost everything about me!</h3>
      </div>
    </div>
  )
}