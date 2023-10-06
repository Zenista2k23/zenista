import React from 'react'
import Eventbox from './Eventbox'

import binary from'../images/eventlogo/binary.jpeg';
import crack from'../images/eventlogo/crack.jpeg';
import seed from'../images/eventlogo/seed.jpeg';
import electro from'../images/eventlogo/ELECTRO.jpeg';
import xpresso from'../images/eventlogo/xpresso.jpeg';
import pixel from'../images/eventlogo/pixieland.jpeg';
import beats from'../images/eventlogo/beats.png';








function Events() {
  return (
    <div id = 'events'>
        <h1>TECH EVENTS</h1>
        <div className='a-container'>
            {/* <Eventbox image = {fimgae1} title = "THE GREAT WHITES" text = "Project presentation" r1 = "Three members in a team"  r2 = "Preliminary selection round online" r3 = "Shortlisted teams will attend final round" r4 = "7 minutes for marketing your product" r5 = "3 minutes for Q&A" /> */}
            <Eventbox image = {binary} title = "BINARY BLAST" text = "A Technical Event where participants are allowed to demonstrate their Project's prototype and the best project demonstration will get attractive cash prizes!!! " link = "binary" />
            <Eventbox image = {crack} title = "CRACK A DOC" text = "“CRACK A DOC” will give an opportunity to conduct multiple levels of quiz that deals with technology-based questions" link="crack" /> 
            <Eventbox image = {seed} title = "SOW A SEED" text = "Hey, aspiring entrepreneurs! Want a great place to showcase your startup ideas? Join the forum right away to take advantage of the chance to sow a startup seed!" link="seed" />
        </div>

        <div className='a-container'>
        <Eventbox image = {electro} title = "ELECTROFIX" text = "Playground for the Electric Minds" link= "electro" />
        </div>

        <h1>NON TECH EVENTS</h1>

        <div className='a-container'>
            <Eventbox image = {beats} title = "Flicks & Beats" text = "Calling all pop culture aficionados, cinephiles, music lovers, and anime enthusiasts, Get ready to put your knowledge to the test and prove your expertise" link="beats" />
            <Eventbox image = {xpresso} title = "XPRESSO-11" text = "Step onto the grand stage of the “Cricket Auction Extravaganza”, where the thrill of the Indian Premier League(IPL) meets the excitement of a high-stakes auction" link="xpress" /> 
        <Eventbox image = {pixel} title = "PIXIELAND" text = "It's an opportunity to display your  unique perspective and narrative through captivating images." link= "pixel" />

        </div>

    </div>
  )
}

export default Events;