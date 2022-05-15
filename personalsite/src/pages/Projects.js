import React from 'react';
import VideoLooper from 'react-video-looper';
import projects from "../assets/projects";
import {Box, Title, Desc} from "./ProjectStyle";
import {FaCss3Alt, FaHtml5, FaReact, FaCuttlefish, FaPython, FaVuejs, FaAws  } from "react-icons/fa";
import {SiJavascript, SiNetlify, SiCplusplus, SiJava} from 'react-icons/si';
import { Icon } from '../components/navbar/Navigation';
import VideoBg from "reactjs-videobg";
import vid from '../assets/tri.webm';
import cover from '../assets/cover.png';
import {DecryptText as DText } from "../components/textDecrypt/decrypt";

function decodeIcon(icon) {
  if(icon === "rt"){
    return <>&nbsp;<FaReact /></>;
  } else if(icon === "py"){
    return <FaPython />;
  } else if(icon === "vu"){
    return <FaVuejs/>
  } else if(icon === "aw"){
    return <>&nbsp;<FaAws /></>
  } else if(icon === "ne"){
    return <>&nbsp;<SiNetlify /></>
  } else if(icon == "cp"){
    return <>&nbsp;<SiCplusplus /></>
  } else if(icon == "cl"){
    return <FaCuttlefish/>
  } else if(icon == "ht"){
    return <FaHtml5/>
  } else if(icon == "cs"){
    return <FaCss3Alt/>
  } else if(icon == "js"){
    return <><SiJavascript /></>
  }
}

const Projects = () => {
    return(
      <>
        <VideoBg poster={cover}>
          <VideoBg.Source src ={vid} type="video/webm"/>
        </VideoBg> 
        {projects.map(data => (
         
          <Box href={data.lk}>
            <Title>
              {data.name} {(data.icon).map(ic => (decodeIcon(ic)))}
            </Title>
            <Desc>
              {data.desc}
            </Desc>
          </Box>
  
        ))};

      </>
        
        
            
      
    );
};

export default Projects;

