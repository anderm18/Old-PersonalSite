import React, { Component } from 'react';
import ImageFadeIn from 'react-image-fade-in';
import Myself from "../assets/me.png";

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Center',
        height: '85vh',
        verticalAlign: 'middle',
        zIndex: '0'
      }}
    >
      <ImageFadeIn width={500} height={500} src={Myself} />
     
      <p style={{
        fontSize:'4vw',
        verticalAlign: 'top',
        right: '85vh',
        height: '85vh',
        justifyContent: 'Right'
      }}>&nbsp; Michael J. Anderson</p>
    </div>
  );
};
  
export default Home;