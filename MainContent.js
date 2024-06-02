import React from 'react'
import './mainContent.scss';
import MainTop from './MainTop/MainTop';
import MainBottom from './MainBottom/MainBottom';

export default function MainContent() {
  return (
    <div className='MainContent'>
       <MainTop/>
       <MainBottom/>
    </div>
  )
}
