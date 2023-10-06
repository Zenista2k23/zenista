import React from 'react'
import Nav from './EventsNav';
import "./events.css"
import binary from '../images/eventlogo/xpresso.jpeg'



const Flicks = () => {
    return (
    <div className='Mcont'> 
    <Nav/>
    
    <div className="container">
        <div className="img-cont">
          <img src={binary} alt="Image of perfume" class="dsktp" />
        </div>
        <div className="event-details">

            <h1>FLICKS & BEATS</h1>
            <p className="description">
            Electrofix is a technical event where individual participants will put their knowledge to correct faulty circuits. This is designed to challenge participants' problem-solving abilities, their understanding of electrical circuits. There will be 3 rounds and  each participant will be given a set of circuits with intentional errors, and their task is to identify and rectify the issues in the given time.
            </p>
            <div className="rules">
              <h3>Rules:</h3>
                <ol>
                    <li>This is an Individual event.</li>
                    <li>There will be a total of 3 Rounds.</li>
                    <li>Time to Solve each question is 2 minutes.</li>
                    <li>Participants must have their College ID Card with them.</li>
                    <li>The components needed will be provided.</li>
                    <li>Just brush up on your skills before the event and bask in the experience as it unfolds.</li>
                    <li>Winners will be awarded with prizes and certificates. All participants will receive participation certificates.</li>
                </ol>
            </div>

            <div className="bottom">
              <div className="contacts-dtls">
              COORDINATORS:

                <p>1.	DHEEPAK G : <br />6381788494</p>
                <p>2.	SANDEEP KRISHNAN S : <br />97909 03436</p>
              </div>
              <button className='reg-btn' type="button"><a href="https://forms.gle/CRiAmoK2kmvnCT427" target="_blank"><span class="text">Register</span></a></button> 
            </div>

        </div>
    </div>

    </div>
  )
}

export default Flicks