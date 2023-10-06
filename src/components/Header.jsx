import React from 'react'
import bgvideo from '../video/bg.mp4'
import logo from '../images/eventlogo/logo.png'


function Header() {
  return (
    <div id = 'main'>
       {/* <video id = 'main-video' autoPlay muted>
        <source src={bgvideo}/>
      </video> */}
      <img id = 'main-video' src={logo} alt="" />
        <div className='name'>
            
            {/* <h2>DEPARTMENT OF ECE</h2>
            <span id = 'of'>PRESENTS</span>  */}

        </div>

    </div>
    

  )
}

export default Header