import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import Myself from "../assets/me.png";
import {Name, MainDescFirst, fixOrder} from "./HomeStyle";
import { DecryptTitle as DTitle, DecryptText as DText } from "../components/textDecrypt/decrypt";
import VideoBg from "reactjs-videobg";
import vid from '../assets/tri.webm';
import cover from '../assets/cover.png';

const Home = () => {
  return (
    <fixOrder>
      
      <VideoBg poster={cover}>
        <VideoBg.Source src ={vid} type="video/webm"/>
      </VideoBg>  
      <ImageFadeIn        
        style={{
          display: 'flex', 
          position: 'absolute',
          top: '20%',
          left: '5%'
        }} src={Myself} />

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