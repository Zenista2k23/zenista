import React from 'react'
import Nav from './EventsNav';
import "./events.css"
import binary from '../images/eventlogo/pixieland.jpeg'



const Pixel = () => {
    return (
    <div className='Mcont'> 
    <Nav/>
    
    <div className="container">
        <div className="img-cont">
          <img src={binary} alt="Image of perfume" class="dsktp" />
        </div>
        <div className="event-details">

            <h1>PIXIELAND</h1>
            <p className="description">
            Pixieland is a photography event that invites participants to show case  their talent and passion for capturing the beauty and essence of the  world through the lens of a camera.
            </p>
            <p>SELECTION CRITERIA:
                <br /><br />
                •	Innovation.
•	Winner will be based on likes and best photo

            </p>

            <div className="rules">
              <h3>Rules:</h3>
                <ol>
                    <li>Individual event.</li>
                    <li>Multiple entries are not allowed.</li>
                    <li>Editing and Watermark are not allowed.</li>
                    <li>Any engineering student from any discipline can submit their photos.</li>
                    <li>Individual should upload a valid student ID card of their college in Gform.</li>
                    <li>All selected participants will receive a participation E-certificate.</li>
                    <li>Winners will be awarded with prizes and certificates.</li>
                </ol>
            </div>

            <div className="bottom">
              <div className="contacts-dtls">
              COORDINATORS:

                <p>1.	MANOJ J  : <br />91508 85977</p>
                <p>2. HARESH S  :  <br />80729 75216</p>
              </div>
              <button className='reg-btn' type="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf_ZUP68EOA5knbdj6wOVY-i_mR6RFzKii5lvpr4A7nYwR5TQ/viewform?usp=pp_url" target="_blank"><span class="text">Register</span></a></button> 
            </div>

        </div>
    </div>

    </div>
  )
}

export default Pixel