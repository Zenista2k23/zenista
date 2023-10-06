// VideoBackground.js
import React from 'react';
import video from '../video/bgmp4.mp4'
import "./bg.css"

const Bg = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        {/* Add additional <source> elements for other video formats */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Bg;
