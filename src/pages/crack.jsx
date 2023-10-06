import React from 'react'
import Nav from './EventsNav';
import "./events.css"
import binary from '../images/eventlogo/crack.jpeg'



const Crack = () => {
    return (
    <div className='Mcont'> 
    <Nav/>
    
    <div className="container">
        <div className="img-cont">
          <img src={binary} alt="Image of perfume" class="dsktp" />
        </div>
        <div className="event-details">

            <h1>CRACK A DOC</h1>
            <p className="description">
            Each questions will open avenue to next series of questions which are cross functional. This helps to calibrate the individuals to identify their basic technical skills, become competitive and acquire technical knowledge Electronic Industry.
            </p>
            <div className="rules">
              <h3>Rules:</h3>
                <ol>
                    <li>There will be 2 rounds in the event, elimination will be based on score.</li>
                    <li>Quiz will be conducted in college campus via online</li>
                    <li>Team size: 1 (individual).</li>
                    <li>Use only Laptop good bandwidth internet connection. Mobiles and tabs are highly restricted.</li>
                    <li>Replacement of any participant is not allowed after registration.</li>
                    <li>The participants are requested to bring “id card” to enter the event.</li>
                    <li>Winners will be awarded with prizes and certificates. All participants will receive participation certificates.</li>

                </ol>
            </div>

            <div className="bottom">
              <div className="contacts-dtls">
              COORDINATORS:

                <p>1.	OM SELVAPRAKASH M : <br />9597340409</p>                        
                <p>2. SUBRAMANIAN R M : <br />8925366706</p>
              </div>
              <button className='reg-btn' type="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeQYDXbRac0LjTZXVxNLf2mGBR4cG69dEtjT_LzSFbUUfk1Kw/viewform?usp=sf_link" target="_blank">Register</a></button> 
            </div>

        </div>
    </div>

    </div>
  )
}

export default Crack;