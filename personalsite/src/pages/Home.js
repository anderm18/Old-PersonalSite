import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import Myself from "../assets/me.png";
import {Name, MainDescFirst, fixOrder} from "./HomeStyle";
import { DecryptTitle as DTitle, DecryptText as DText } from "../components/textDecrypt/decrypt";
import VideoLooper from 'react-video-looper';
import vid from '../assets/tri.webm';

const Home = () => {
  return (
    <fixOrder>
      
      <VideoLooper source={vid} start={0.00} end={16.00} speed={1}/>
      <ImageFadeIn        
        style={{
          display: 'flex', 
          position: 'absolute',
          top: '20%',
          left: '40px'
        }} width={700} height={700} src={Myself} />

      <Name>
        <DTitle text={"Michael J. Anderson"}/>
      </Name>
      <MainDescFirst>
        <DText text={"Computer Science Student, Rensselaer Polytechnic Institute"}/>
      </MainDescFirst>


    </fixOrder>
  );
};
  
export default Home;