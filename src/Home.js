// src/Home.js

import React, { useRef, useEffect } from 'react';
import './Home.css'; // Ensure the correct CSS file is imported
import Navbar from './Components/Navbar';
import videoFile from './assets/videoplayback.mp4';

const Home = () => {
  const videoRef = useRef(null);
  const startTime = 4;
  const endTime = 43;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = startTime;

      const handleTimeUpdate = () => {
        if (video.currentTime >= endTime) {
          video.currentTime = startTime;
        }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [startTime, endTime]);

  return (
    <div className="App">
      <div className="navbar-video-container">
        <Navbar />
        <div className="video-container">
          <video ref={videoRef} className="intro-video" autoPlay muted loop src={videoFile}>Your browser does not support the video tag.</video>
        </div>
      </div>
      <section id="home" className="section">
        <h1>Home Section</h1>
      </section>
      <section id="tournament" className="section">
        <h1>Tournament Section</h1>
      </section>
      <section id="Games" className="section">
        <h1>Games Section</h1>
      </section>
      <section id="About" className="section">
        <h1>About Section</h1>
      </section>
      <section id="contact" className="section">
        <h1>Contact Section</h1>
      </section>
    </div>
  );
};

export default Home;
