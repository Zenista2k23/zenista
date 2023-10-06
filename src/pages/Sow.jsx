import React from 'react'
import Nav from './EventsNav';
import "./events.css"
import binary from '../images/eventlogo/seed.jpeg'



const Sow = () => {
    return (
    <div className='Mcont'> 
    <Nav/>
    
    <div className="container">
        <div className="img-cont">
          <img src={binary} alt="Image of perfume" class="dsktp" />
        </div>
        <div className="event-details">

            <h1>SOW A SEED</h1>
            <p className="description">
            Event: Startups compete with product pitches, emphasizing revenue, ROI, and analysis in presentation slides. Timed presentations determine winners based on product uniqueness, R&D, and delivery.
            <br />
            <br />
            The Presentation should contain , 1. Business pitch, 2. Revenue generation methods, 3. SWOT analysis, 4. Total cost of the product and Return on Investment(ROI), 5. Impact of your product, 6. Competitors and uniqueness of your product

            </p>
            <div className="rules">
              <h3>Rules:</h3>
                <ol>
                    <li>The team should have only 2 members, Plagiarised contents are strictly prohibited.</li>
                    <li>Do proper R&D and add relevant business-related terms in your PPT.</li>
                    <li>The team will have 7 minutes to present their idea and 3 minutes to answer the questions asked by the panel members.</li>
                    <li>Winners will be awarded with prizes and certificates. All participants will receive participation certificates.</li>
                </ol>
            </div>

            <div className="bottom">
              <div className="contacts-dtls">
              COORDINATORS:

                <p>1.	DHEEPAK G : <br />6381788494</p>
                <p>2.	SANDEEP KRISHNAN S : <br />97909 03436</p>
              </div>
              <button className='reg-btn' type="button"><a href="https://forms.gle/M4zhwktJkwfDqDVLA" target="_blank">Register</a></button> 
            </div>

        </div>
    </div>

    </div>
  )
}

export default Sow