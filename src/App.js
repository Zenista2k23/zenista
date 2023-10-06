import React from 'react'
import Main from './pages/MainPage.js'
import Binary from './pages/binary.jsx';
import Crack from './pages/crack.jsx';
import Sow from './pages/Sow.jsx';
import Electro from './pages/Electro.jsx';
import Xpress from './pages/xpresso.jsx';
import Beats from './pages/beats.jsx';
import Pixel from './pages/Pixel.jsx';

// import Nav from './components/nav'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    {/* <Nav/> */}
    <Router basename='/Zenista'>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/binary" element={<Binary/>} />
        <Route exact path="/crack" element={<Crack/>} />
        <Route exact path="/seed" element={<Sow/>} />
        <Route exact path="/electro" element={<Electro/>} />
        <Route exact path="/xpress" element={<Xpress/>} />
        <Route exact path="/beats" element={<Beats/>} />
        <Route exact path="/pixel" element={<Pixel/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
