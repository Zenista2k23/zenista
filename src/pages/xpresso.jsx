import React from 'react'
import Nav from './EventsNav';
import "./events.css"
import binary from '../images/eventlogo/xpresso.jpeg'



const Xpress = () => {
    return (
    <div className='Mcont'> 
    <Nav/>
    
    <div className="container">
        <div className="img-cont">
          <img src={binary} alt="Image of perfume" class="dsktp" />
        </div>
        <div className="event-details">
            <h1>XPRESSO-11</h1>
            <div className="rules">
              <h3>Rules:</h3>
                <ol>
                    <li>Team event[2 or 3 members]</li>
                    <li> Prelims[Cricket Quiz] will be conducted online and the shortlisted can participate in auction on 19.10.2023</li>
                    <li>Players can be bidded based on only IPL records.</li>
                    <li>Participants must have their College ID Card with them.</li>
                    <li>Current players, uncapped players and recently retired players are only allowed for bidding.</li>
                    <li>Each and every player will have certain points based on their IPL records and the final evaluation will be strictly based on that.</li>
                    <li>Each team should have 15 players[4 backups] and the top 11 will be considered for the evaluation.</li>
                    <li>The teams shall use this budget to make a team of 11 players keeping the following criteria in mind and failure in fulfilling these criterias will lead to disqualification of team</li>
                    <li>a. There should be a atleast 3 batsman
                        b. There should be atleast 2 bowlers
                        c. There should be atleast 1 all-rounder
                        d. There should be atleast 1 wicket-keeper</li>
      
                </ol>
            </div>

            <div className="bottom">
              <div className="contacts-dtls">
              COORDINATORS:

                <p>1.	PRADEEP R : <br />91501 24785</p>
                <p>2.	NATARAJ T R :  <br />80721 02476</p>
              </div>
              <button className='reg-btn' type="button"><a href="https://forms.gle/kj7su7FKLfJM2gLL8" target="_blank"><span class="text">Register</span></a></button> 
            </div>

        </div>
    </div>

    </div>
  )
}

export default Xpress