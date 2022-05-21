import React from 'react';
import FadeIn from 'react-fade-in';
import projects from "../assets/projects";
import {Box, Title, Desc, Margin} from "./ProjectStyle";
import {FaCss3Alt, FaHtml5, FaReact, FaCuttlefish, FaPython, FaVuejs, FaAws, FaJava } from "react-icons/fa";
import {SiJavascript, SiNetlify, SiCplusplus} from 'react-icons/si';
import {DecryptText} from "../components/textDecrypt/decrypt";

export function decodeIcon(icon) {
  if(icon === "rt"){
    return <>&nbsp;<FaReact /></>;
  } else if(icon === "py"){
    return <FaPython />;
  } else if(icon === "vu"){
    return <FaVuejs/>;
  } else if(icon === "aw"){
    return <>&nbsp;<FaAws /></>;
  } else if(icon === "ne"){
    return <>&nbsp;<SiNetlify /></>;
  } else if(icon === "cp"){
    return <>&nbsp;<SiCplusplus /></>;
  } else if(icon === "cl"){
    return <FaCuttlefish/>;
  } else if(icon === "ht"){
    return <FaHtml5/>;
  } else if(icon === "cs"){
    return <FaCss3Alt/>;
  } else if(icon === "js"){
    return <><SiJavascript /></>;
  } else if(icon === "ja"){
    return <FaJava/>;
  }
}

const Projects = () => {
    return(
      <FadeIn transitionDuration={1000}>
       
        {projects.map(data => (
          
          <Box href={data.lk}>
            <Title>
              <DecryptText text={data.name}/>
              {(data.icon).map(ic => (decodeIcon(ic)))}
              <Desc>
                <FadeIn delay={1000} transitionDuration={1000}>
                  {data.desc}
                </FadeIn>
              </Desc>
            </Title>
          </Box>
          
  
        )
        )};
        <Margin />
        </FadeIn>
    
        
        
            
      
    );
};

export default Projects;

