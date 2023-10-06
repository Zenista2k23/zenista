import React from 'react'
import Nav from './EventsNav';
import "./events.css"
import binary from '../images/eventlogo/beats.png'



const Beats = () => {
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
                The Entertainment Extravaganza is a quiz event that covers a wide spectrum of
                entertainment topics, including music, movies, and anime. It's the ultimate
                battleground for fans and experts alike to compete, learn, and revel in the magic
                of entertainment trivia.
            </p>
            <p>Event Rounds: <br /> <br />
                Round 1: “TaleFest” <br />
                Round 2: “MusiQuest” <br />
                Round 3: "CineHunt"
            </p>

            <div className="rules">
              <h3>Rules:</h3>
                <ol>
                    <li>Each team can have a maximum of 2 members.</li>
                    <li>Member should have a valid student ID card of the college</li>
                    <li>Number of rounds: 3</li>
                    <li>Winners will be awarded with prizes and certificates. All participants will receive participation certificates.</li>
                </ol>
            </div>

            <div className="bottom">
              <div className="contacts-dtls">
              COORDINATORS:

                <p>1.	KEERTHANA R G :  <br />96264 00104</p>
                <p>2.	RAMANATHAN M  :  <br />6383 672 716</p>
              </div>
              <button className='reg-btn' type="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfkxpvysTWiJ9q2is-s70fr9JmTzo83m812lk3mD1TcQ2bWRg/viewform?usp=sf_link" target="_blank"><span class="text">Register</span></a></button> 
            </div>

        </div>
    </div>

    </div>
  )
}

export default Beats