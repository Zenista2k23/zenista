import React from 'react'
import Profilebox from './Profilebox'

import principal from '../images/persons/principal.png'
import hod from '../images/persons/hod.png'
import Naresh from '../images/persons/Naresh 2.jpg'
import arunn from '../images/persons/Arunn3.jpg'
import dharun from '../images/persons/Dharun.jpg'
import mathumitha from '../images/persons/Mathumitha .png'
import madhan from '../images/persons/Madhan N.png'
import rithick from '../images/persons/Rithick 2 .jpg'
import jai from '../images/persons/jai1.jpg'
import priyadharsini from '../images/persons/Priyadharshini J-ECE.jpg'
import nitin from  '../images/persons/nitin.png'
import alwin from '../images/persons/scan photo 400 x 400.png'
import prakash from '../images/persons/prakash 400x 400.jpg.png'
import koushika from '../images/persons/koushika B V.jpg'
import sairam_ceo from '../images/persons/sairam_ceo.png'
import sriram from '../images/persons/sriram.png'
import pranyka from '../images/persons/Pranyka .jpg'




function Ourteam() {

  return (
    <div id="ourteam" className='profilels'>
        <h1>KEY PERSONS</h1>
        <div className='pro-container'>
            <div className='pro-img-3'> 
                {/* text = "contact details " */}
                <Profilebox image = {sairam_ceo} title = "Dr. SAI PRAKASH LEO MUTHU" text="CEO" />
                <Profilebox image = {principal} title = "Dr. K PORKUMARAN" text="PRINCIPAL" />
                <Profilebox image = {hod} title = "Dr. J RAJA" text="HOD/DEAN ACADEMICS" />
            </div>
        <h1>STAFF CO-ORDINATORS</h1>
            <div className='pro-img'>
                <Profilebox image = {prakash} title = "Dr. P PRAKASH" text="AP/ECE" />
                <Profilebox image = {alwin} title = "Mr. C ALWIN VINIFRED" text="AP/ECE" />
            </div>
        <h1>CHAIR-PERSON</h1>
            <div className='chair-img'>
                <Profilebox image = {Naresh} title = "NARESH M" linkedin="naresh-m-542291206" textLinkedin="linkedin"/>
            </div>
        </div>

        <div className='pro-container'>
            <div className='pro-head'>
                <h2>ORGANIZERS</h2>
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {dharun} title = "DHARUNRAJ S S" linkedin="dharun-raj-2b1b961b9" textLinkedin="linkedin" />
                <Profilebox image = {arunn} title = "ARUNN T" linkedin="arunn-t-310963208" textLinkedin='linkedin' />
                <Profilebox image = {mathumitha} title = "MATHUMITHA S" linkedin="mathumitha-srinivasan-8aab75205" textLinkedin='linkedin' />
                <Profilebox image = {madhan} title = "MADHAN N" linkedin="madhan-n-976102205" textLinkedin="linkedin" />
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {priyadharsini} title = "PRIYADHARSHINI J" linkedin="priya-dharshini-33a84717a" textLinkedin='linkedin' />
                <Profilebox image = {jai} title = "JAIVIGNESH K" linkedin="jaivignesh-k-288bba205" textLinkedin='linkedin' />
                <Profilebox image = {rithick} title = "RITHICK B" linkedin="rithick1004" textLinkedin="linkedin" />
                <Profilebox id='pranyka' image = {pranyka} title = "PRANYKA R A" linkedin="pranyka-ravichandran-a02597205" textLinkedin="linkedin" />
            </div>


            <div className='pro-img-4' id = "kk">
                <Profilebox image = {koushika} title = "KOUSHIKA B V" linkedin="koushika-b-v-4aa289211" textLinkedin="linkedin" />
            </div>

        </div>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>VIDEO & POSTER TEAM</h2>
                <h4>TEAM LEAD</h4>
            </div>

           <div className='chair-img'>
                <Profilebox image = {nitin} title = "SRINITHIN S B" linkedin="srinithin-s-b-5345a8205" textLinkedin='linkedin' />
            </div>

            
            <div className='pro-head'>
                <h4>MEMBERS</h4>

            <div className="mem">
                <div className='pro-img'>
                    <a href="https://www.linkedin.com/in/sreevarshan-s-a2027a200/" target='_blank'>SREEVARSHAN S</a>
                    <a href="https://www.linkedin.com/in/tamil-amudhan-t-ab7598205/" target='_blank'>TAMIL AMUDHAN T</a>
                </div>
                <br />
                <br />
                <div className='pro-img'>

                    <a href="https://www.linkedin.com/in/shanmugha-jeyashree-b87801228" target='_blank'>SHANMUGHA JEYASHREE B </a>
                    <a href="http://linkedin.com/in/yashini-priyankha-s-929275227" target='_blank'>YASHINI PRIYANKHA S</a>
                </div>

                <br />
                <br />

                <div className='pro-img'>
                    <a href="http://linkedin.com/in/kiruthika-a-03baa4228" target='_blank'>KIRUTHIKA A</a>
                    <a href="https://www.linkedin.com/in/shruthi-priya-t-183725250" target='_blank'>T SHRUTHIPRIYA</a>
                </div>
                <br />
                <br />
                <div className='pro-img'>
                    <a href="https://in.linkedin.com/in/srivathsan-v-b04658206" target='_blank'>SRIVATHSAN V</a>
                    <a href="https://www.linkedin.com/in/dheena-dhayalan-r-7a093b258" target='_blank'>DHEENA DHAYALAN R</a>
                </div>
            </div>
            </div>

        </div>

        <div className='pro-container'>
            <div className='pro-head'>
                <h2>WEB DEVELOPERS</h2>
                <h4>TEAM LEAD</h4>
            </div>

            <div className='chair-img'>
                <Profilebox image = {sriram} title = "SRIRAM A" linkedin="sriramanandan003" textLinkedin='linkedin' />
            </div>

            <div className='pro-head'>
                <h4>MEMBERS</h4>
            <div className="mem">

            <div className='pro-img'>
                <a href="https://www.linkedin.com/in/monish-ram-v-s" target='_blank'>MONISH RAM V S</a>
                <a href="https://www.linkedin.com/in/karthikeyan-j-33151b206" target='_blank'>KARTHIKEYAN J</a>
            </div>
            <br />
            <br />
            <div className='pro-img'>
                <a href="https://www.linkedin.com/in/bhuvanesh-k-954863205" target='_blank'>BHUVANESH K</a>
                <a href="https://www.linkedin.com/in/arun-kumar-balasubramaniyan-422136206" target='_blank'>ARUN KUMAR B</a>
             </div>
             </div>
            </div>
        </div>

       
    </div>
  )
}

export default Ourteam