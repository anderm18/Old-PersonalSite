import React from 'react';
import {
    NavigationBar,
    NavigationMenu,
    NavigationLink,
    Icons,
} from './Navigation';
import { IconContext } from 'react-icons';
import { FaGlobe } from 'react-icons/fa';
import { SiHandshake } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone, AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Navigation = () => {
    return (
        <>
          <NavigationBar>
              <NavigationMenu>
                  <NavigationLink to='/home' activeStyle>
                      Home
                  </NavigationLink>
                  <NavigationLink to='/projects' activeStyle>
                      Projects
                  </NavigationLink>
                  <NavigationLink to='/courses' activeStyle>
                      Revelant Coursework
                  </NavigationLink>
                  <Icons href="https://github.com/anderm18">
                    <IconContext.Provider value={{ className: "shared-class", size: 30, style: { verticalAlign: 'bottom'} }}>
                        <AiFillGithub />
                    </IconContext.Provider>
                  </Icons>
                  <Icons href="https://www.linkedin.com/in/anderm18/">
                    <IconContext.Provider value={{ className: "shared-class", size: 30, style: { verticalAlign: 'bottom'} }}>
                        <AiFillLinkedin />
                    </IconContext.Provider>
                  </Icons>
                  <Icons href="https://app.joinhandshake.com/stu/users/28139247">
                    <IconContext.Provider value={{ className: "shared-class", size: 30, style: { verticalAlign: 'bottom'} }}>
                        <SiHandshake />
                    </IconContext.Provider>
                  </Icons>
                  <Icons href="https://www.instagram.com/notmikeya/">
                    <IconContext.Provider value={{ className: "shared-class", size: 30, style: { verticalAlign: 'bottom'} }}>
                        <AiFillInstagram />
                    </IconContext.Provider>
                  </Icons>
                  <Icons href="https://twitter.com/notmikeya">
                    <IconContext.Provider value={{ className: "shared-class", size: 30, style: { verticalAlign: 'bottom'} }}>
                        <AiOutlineTwitter />
                    </IconContext.Provider>
                  </Icons>
                  <Icons>
                    <IconContext.Provider value={{ className: "shared-class", size: 30, style: { verticalAlign: 'bottom'} }}>
                        <FaGlobe />
                    </IconContext.Provider>
                  </Icons>
                  <Icons href="mailto:michael.j.anderson@me.com">
                    <IconContext.Provider value={{ className: "shared-class", size: 30, style: { verticalAlign: 'bottom'} }}>
                        <MdEmail />
                    </IconContext.Provider>
                  </Icons>
                  <Icons>
                    <IconContext.Provider value={{ className: "shared-class", size: 30, style: { verticalAlign: 'bottom'} }}>
                        <AiFillPhone />
                    </IconContext.Provider>
                  </Icons>
              </NavigationMenu>
          </NavigationBar>
        </>
    );
};

export default Navigation;