import React from 'react'
import Nav from '../components/nav';
import Header from '../components/Header';
import Events from '../components/Events';
import Offer from '../components/Offer';
import Ourteam from '../components/Ourteam';
import Accordion from '../components/Accordion';

import AboutZ from '../components/AboutZ';
import Bg from '../components/Bg';

function MainPage() {
    return (
      <div className="App"> 

        <Bg/>
        <Nav/>
        <Header/>
        <AboutZ />
        <Events/>
        <Offer/>
        <Ourteam/>
        <Accordion/>
      </div>
    );
  }
  
  export default MainPage;
  