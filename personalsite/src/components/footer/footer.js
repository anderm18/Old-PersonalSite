import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from 'react-icons';

const Footer = () => {
    return(
    <div className="footer">
        <p>Created by Michael Anderson. See the Source Code on&nbsp; 
            <a href="https://github.com/anderm18/PersonalSite" rel ="noreferrer">
                GitHub
                <IconContext.Provider value={{ className: "shared-class", size: 25, style: { verticalAlign: 'bottom'} }}>
                  <AiFillGithub />
                </IconContext.Provider>
            </a>
        </p>
       
    </div>
    );
};

export default Footer