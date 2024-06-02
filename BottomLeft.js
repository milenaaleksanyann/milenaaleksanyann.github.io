import React from 'react'
import './bottomLeft.scss';
import CV from './CV.pdf'
import MyPng from './../../../Images/MyPng.jpg';
function BottomLeft() {
  return (
    <div className='ContenLeft'>
    <div className='Cv'>
      <img src={MyPng} alt='my photo' />
      <h1>My CV</h1>
      <p>I am  a dedicated and responsible individual whose work ethic and commitment set me apart. With a natural inclination towards responsibility, I consistently takes ownership of tasks and ensures they are completed with the utmost precision and care.</p>
      <a href={CV} download={"CV by Milena"}>download CV</a>

    </div>
   
    </div>
  )
}

export default BottomLeft