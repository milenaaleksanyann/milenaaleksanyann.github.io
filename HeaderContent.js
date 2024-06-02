import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './headerContent.scss';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import ContactMe from '../ContactMe/ContactMe';
import Header, { listPage } from '../Header';
export default function HeaderContent() {
  return (
    <BrowserRouter>

<div className='HeaderContent'>

      <Header/>
  {listPage.map((elem)=>{

  if(elem === "AboutMe"){
   return <Routes>
    <Route
    path={elem}
    element={<div className={'AboutMe'}><AboutMe/></div>}>
        </Route>
   </Routes>
  }else if(elem === "Skills"){
  return <Routes>
    <Route 
     path={elem}
    element={<div className='Skills'><Skills/></div>}>

    </Route>
  </Routes>
  }else{
    return <Routes>
        <Route
        path={elem}
        element={<div className='ContactMe'><ContactMe/></div>}>
        </Route>
    </Routes>
  }

  })}

    </div>

    </BrowserRouter>
    
  )
}
