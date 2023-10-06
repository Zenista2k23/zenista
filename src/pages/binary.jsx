import React from 'react'
import Nav from './EventsNav';
import "./events.css"
import binary from '../images/eventlogo/binary.jpeg'



const Binary = () => {
    return (
    <div className='Mcont'> 
    <Nav/>
    
    <div className="container">
        <div className="img-cont">
          <img src={binary} alt="Image of perfume" class="dsktp" />
        </div>
        <div className="event-details">

            <h1>BINARY BLAST</h1>
            <p className="description">
            Participants must demonstrate their project on the event day. Teams will be given a space to set up their model/design at the venue for exhibition.

            </p>
            <p>IMPORTANT NOTES!!</p>
            <p>•	It should be a fully working module.
•	All selected participants will receive a participation certificate.
•	Participants should bring all their requirements to execute their project.
</p>
            <div className="rules">
              <h3>Rules:</h3>
                <ol>
                    <li>Each team can have a maximum of 3 members.</li>
                    <li>Any engineering student from any discipline can submit their ideas..</li>
                    <li>Do proper R&D and add relevant business-related terms in your PPT.</li>
                    <li>A team member should participate in only one project presentation.</li>
                    <li>Winners will be awarded with prizes and certificates. All participants will receive participation certificates. The best ones will be filtered out.</li>
                </ol>
            </div>

            <div className="bottom">
              <div className="contacts-dtls">
              COORDINATORS:
                <p>1.	HARINI A : <br />8825488037</p>
                <p>2. JAYASAKTHI J R : <br />89256 26345</p>
              </div>
              <button className='reg-btn' type="button"><a href="https://forms.gle/ZQpUUxv4yNiBtTQV8" target="_blank"><span class="text">Register</span></a></button> 
            </div>

        </div>
    </div>

    </div>
  )
}

export default Binary