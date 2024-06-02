import React from 'react'
import './aboutMe.scss';
import laptop from './../../Images/laptop.jpg';  
import mujeresWebdev from './../../Images/mujeresWebdev.jpg';
import LessText from './LessText';

export default function AboutMe() {
  return (
    <div className='About'>
       
   <div className='png'>
    <img src={laptop}/>
   </div>

   <div className='bottomBlock'>
     <div className='me container'>
     <h2>My name is Milena Aleksanyan</h2>
     <h3>FrontEnd Web Developer</h3>
     <LessText
      
      
     text=" Hi everyone,I'm from Armenia and
     I decided to become a web developer when I was still a teenager. 
     Now I have one most important goal, to be one of the best in my profession.
     i'm exemplifies the essence of teamwork, recognizing that collective success is forged through collaborative effort.With a keen appreciation for the diverse strengths and perspectives of their peers, i'm fosters an environment of inclusivity and cooperation, where every individual is empowered to contribute meaningfully towards shared goals.
     Through effective communication, active listening and a spirit of camaraderie, I develop synergy within the team, harnessing collective potential to overcome obstacles and reach remarkable heights.In a world where responsibility and teamwork are paramount, I testify to the transformative power of individual initiative and collective effort.
     "

     />
    
     </div>

     <div className='pic'>
       <img src={mujeresWebdev}/>
     </div>

   </div>

    </div>
  )
}
