import React from 'react'
import './footer.scss';
import Map from './Map';

function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
       
      <Map />
          <div className='contact'>
        <p> Paruyr Sevak 9</p>
          <p> +374 33063304</p>
        </div>
        <div className='powered'>

          <p>Website powered by me</p>

        </div>


      </div>

    </div>
  )
}

export default Footer