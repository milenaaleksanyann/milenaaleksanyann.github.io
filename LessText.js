import React, { useState } from 'react'

export default function LessText(props) {
   
   const [showLess,setShowLess] =useState()

    const text=props.text;
    const max=55;


    if(text.length <= max){
        return  <span>
            {text}
    </span>
    }
  return (
   
    <span className='container'>
    {showLess ? `${text.substring(0,max)} ...`: text}
    <a style={{color:"black"}} href='#' onClick={(elm)=>{
       setShowLess(!showLess)
    }}>{showLess ? "more" : "...less"}</a>
</span>
  )
}




