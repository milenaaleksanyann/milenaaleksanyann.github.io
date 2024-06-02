import React from 'react';
import './mainBottom.scss';
import BottomLeft from './BottomLeft/BottomLeft';
import BottomRight from './BottomRight/BottomRight';
export default function MainBottom() {
  return (
    <div className='MainBottom'>
        <BottomLeft/>
        <BottomRight/>
    </div>
  )
}
