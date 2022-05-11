import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from 'react-icons';
import { DiReact } from "react-icons/di";

const Footer = () => {
    return(
    <div className="footer">
        <p>Created by Michael Anderson using React
                <IconContext.Provider value={{ className: "shared-class", size: 20, style: { verticalAlign: 'middle'} }}>
                  <DiReact />
                </IconContext.Provider>. See the Source Code on&nbsp; 
            <a href="https://github.com/anderm18/PersonalSite" rel ="noreferrer">
                GitHub
                <IconContext.Provider value={{ className: "shared-class", size: 20, style: { verticalAlign: 'bottom'} }}>
                  <AiFillGithub />
                </IconContext.Provider>
            </a>
        </p>
       
    </div>
    );
};

export default Footer