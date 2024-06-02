import React from 'react'
import './skills.scss'
import { ProgressBar} from 'react-bootstrap'

export default function Skills() {

  const html=100
   const css=99
   const js=85 
   const react=90
  const boot=95
  const phSh=90
  
  const arm=100
  const rus=95
  const eng=80
    return (
    <div className='skills-box'>
       <h2>Skills</h2>
       <p>Things that i'm good at.</p>

            <div className='container'>
            <ul className='container-fluid'>
              <li>HTML5   <ProgressBar style={{backgroundColor:"grey"}} now={html} label={`${html}%`}/></li> 
              <li>CSS / SCSS  <ProgressBar style={{color:"grey"}} now={css} label={`${css}%`}/></li>
              <li>JavaScript  <ProgressBar now={js} label={`${js}%`}/></li>
              <li>React  <ProgressBar now={react} label={`${react}%`}/></li>
              <li>Bootsrtap  <ProgressBar now={boot} label={`${boot}%`}/></li>
              <li>AdobePhotoshop  <ProgressBar  now={phSh} label={`${phSh}%`}/></li>

            </ul>
            </div>

            <div className='container lang'>
            <h2>Languages</h2>
            <ul className='container-fluid'>
              <li>Armenian   <ProgressBar now={arm} label={`${arm}%`}/></li> 
              <li>Russian  <ProgressBar now={rus} label={`${rus}%`}/></li>
              <li>English  <ProgressBar now={eng} label={`${eng}%`}/></li>
                          
            </ul>
            </div>

    </div>
  )
}