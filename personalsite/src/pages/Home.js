import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import Myself from "../assets/me.png";
import {Name, MainDescFirst, fixOrder} from "./HomeStyle";
import { DecryptTitle as DTitle, DecryptText as DText } from "../components/textDecrypt/decrypt";

const Home = () => {
  return (
    <fixOrder>
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